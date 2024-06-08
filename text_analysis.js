import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Function to remove HTML tags and JavaScript code blocks
const removeHtmlAndJs = (text) => {
  // Remove HTML tags
  const noHtml = text.replace(/<\/?[^>]+(>|$)/g, '');

  // Remove JavaScript code blocks
  const noJs = noHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  return noJs;
};

// Function to count n-grams frequencies in a string
const countNGramsFrequencies = (text, n) => {
  const words = text.match(/\b\w+\b/g);
  const nGramsCounts = {};
  if (words && words.length >= n) {
    for (let i = 0; i <= words.length - n; i++) {
      const nGram = words.slice(i, i + n).map(word => word.toLowerCase()).join(' ');
      if (nGramsCounts[nGram]) {
        nGramsCounts[nGram]++;
      } else {
        nGramsCounts[nGram] = 1;
      }
    }
  }
  return nGramsCounts;
};

// Function to process a Markdown file and return sorted n-grams frequencies
const processFile = (filePath, n) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(fileContent);
  const content = removeHtmlAndJs(parsed.content);
  const nGramsCounts = countNGramsFrequencies(content, n);
  
  // Convert object to array and sort by frequency
  const sortedNGrams = Object.entries(nGramsCounts).sort((a, b) => b[1] - a[1]);
  
  return { file: filePath, nGramsCounts: sortedNGrams };
};

// Function to get all Markdown files in a directory
const getMarkdownFiles = (dir) => {
  return fs.readdirSync(dir).filter(file => path.extname(file) === '.md');
};

// Process command-line arguments
const inputPath = process.argv[2];
const nIndex = process.argv.indexOf('-n');
const nValue = nIndex !== -1 ? parseInt(process.argv[nIndex + 1], 10) : 1; // Default to 1 if not provided

if (!inputPath) {
  console.error('Please provide a file path or directory.');
  process.exit(1);
}

const stats = fs.statSync(inputPath);
let results = [];

if (stats.isFile()) {
  // Process a single file
  results.push(processFile(inputPath, nValue));
} else if (stats.isDirectory()) {
  // Process all Markdown files in the directory
  const files = getMarkdownFiles(inputPath);
  results = files.map(file => processFile(path.join(inputPath, file), nValue));
} else {
  console.error('Invalid input path. Please provide a valid file or directory.');
  process.exit(1);
}

// Generate output file name with epoch timestamp
const timestamp = Date.now();
const outputFileName = `word_stats_${timestamp}.json`;
const outputFilePath = path.join(process.cwd(), outputFileName);

// Write the results to a JSON file
fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), 'utf8');

console.log(`JSON file was written successfully: ${outputFileName}`);
