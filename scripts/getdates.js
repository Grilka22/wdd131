// getting DOM element for output

const year = document.querySelector("#currentyear");
year.innerHTML = 2025 + ' Rachel Mannewitz, Texas USA';
// using last modified

const date = new Date(document.lastModified);
const lastFix = document.querySelector("#lastModified");
lastFix.innerHTML = 'Last Modified: ' + date;