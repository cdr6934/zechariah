// See https://observablehq.com/framework/config for documentation.
import MarkdownItFootnote from "markdown-it-footnote";

export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Zechariah",
  markdownIt: (md) => md.use(MarkdownItFootnote), 
  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
   pages: [
    {name: "Chapter 1", path: "/zechariah_1"},
    {name: "Chapter 2", path: "/zechariah_2"},
    {name: "Chapter 3", path: "/zechariah_3"},
    {name: "Chapter 4", path: "/zechariah_4"},
    {name: "Chapter 5", path: "/zechariah_5"},
    {name: "Chapter 6", path: "/zechariah_6"},
    {name: "Chapter 7", path: "/zechariah_7"},
    {name: "Chapter 8", path: "/zechariah_8"},
    {name: "Chapter 9", path: "/zechariah_9"},
    {name: "Chapter 10", path: "/zechariah_10"},
    {name: "Chapter 11", path: "/zechariah_11"},
    {name: "Chapter 12", path: "/zechariah_12"},
    {name: "Chapter 13", path: "/zechariah_13"},
    {name: "Chapter 14", path: "/zechariah_14"},

   ],
    
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // root: "docs", // path to the source root for preview
  // output: "dist", // path to the output root for build
   search: true, // activate search
};
