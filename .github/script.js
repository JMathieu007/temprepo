// script.js

// Run this when the page has finished loading
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded and script.js is running ✅");

  // Example: grab the container and change text
  const title = document.querySelector("h1");
  if (title) {
    title.textContent = "It works! (with JavaScript 🎉)";
  }

  // Example: handle a button click if you have one
  const button = document.querySelector(".button");
  if (button) {
    button.addEventListener("click", () => {
      alert("Button clicked! Your GitHub Pages site is live.");
    });
  }
});
