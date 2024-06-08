import {html} from "npm:htl";

export const person = () => {
    return html`<i class="fas fa-user small-text"/>`
}

export const place = () => {
    return html`<i class="fas fa-location-dot small-text"/>`
}

// Path: docs/components/highlight.js
export const hl1 = (textContent, em) => {
    let bg = "#5b5efd";
    let cem = em == null ? 1 : em;
    return html`
      <span style="background: ${bg};font-size: ${cem}em;  color: #ffffff; display: inline-block; padding-left: 5px; padding-right: 5px; border-radius: 5px;">${textContent}</span>
    `;
  }

export const hlc = (textContent, bg, em) => {
    let cem = em == null ? 1 : em;
    return html`<span style="background: ${bg};font-size: ${cem}em;  color: #ffffff; display: inline-block; padding-left: 5px; padding-right: 5px; border-radius: 5px;">${textContent}</span>`;
}