// CHANGED: added a semicolon at the end of this line (no functional change).
console.log("script.js is connected!");

const bioHeading = document.querySelector("#bio-heading");

// CHANGED: #bio-heading only exists on about.html. On index.html and work.html,
// querySelector returns null and the old code logged "null". Now we only log when the element is found.
if (bioHeading) {
  console.log(bioHeading);
}
