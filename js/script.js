const date = document.querySelector("form #date");
date.value = new Date().toISOString().split("T")[0]; // Set current date as default value

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
