const date = document.querySelector("form #date");
date.value = new Date().toISOString().split("T")[0]; // Set current date as default value

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form Submission  Stoped !");
});

// Slider with JavaScript

// slides
let slides = document.querySelectorAll(".slider-root .slider-items .slide");

// navigator buttons
let buttons = document.querySelectorAll(
  ".slider-root .slider-title .slide-navigator #navigator "
);

// added click event listener to each button
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    changeSlide(index);
    changeButton(index);
  });
});

// added click event listener to each slide

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    changeSlide(index);
  });
});

function changeSlide(index) {
  let isTop = slides[index].classList.contains("top");

  if (!isTop) {
    // reset previous slide
    slides.forEach((slide) => {
      slide.classList.remove("top");
      slide.classList.remove("next");
    });

    // set current slide

    let next = index === slides.length - 1 ? 0 : index + 1;

    slides[index].classList.add("top");
    slides[next].classList.add("next");

    // Update buttons
    changeButton(index);
  }
}

function changeButton(index) {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  buttons[index].classList.add("active");
}

// automatic slide change effect

setInterval(() => {
  let currentIndex = Array.from(slides).findIndex((slide) =>
    slide.classList.contains("top")
  );

  let nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

  changeSlide(nextIndex);
}, 4000);

// Populate links

const fb = document.querySelectorAll(".fb");
const twitter = document.querySelectorAll(".twitter");
const lin = document.querySelectorAll(".linkedin");
const email = document.querySelectorAll(".email");

fb.forEach((link) => {
  link.setAttribute("href", "https://www.facebook.com/sahedulislamFB");
  link.target = "_blank";
});
twitter.forEach((link) => {
  link.setAttribute("href", "https://www.x.com/i_am_sahed");
  link.target = "_blank";
});
lin.forEach((link) => {
  link.setAttribute("href", "https://www.linkedin.com/in/sahedulislamrony");
  link.target = "_blank";
});
email.forEach((link) => {
  link.setAttribute("href", "mailto:cast.sahedul@gmail.com");
});

const links = document.querySelectorAll("a");

// reset default behaviour of empty links
links.forEach((link) => {
  let href = link.getAttribute("href");

  if (href === "#" || !href) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
});
