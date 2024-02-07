"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const jobCards = $$(".job-card");
const projectCards = $$(".project-card");

jobCards.forEach((card) => {
  // Get the button element within the card
  const button = card.querySelector(".btn");
  const content = card.querySelector(".job-contents");
  // Add mouseover event listener to the card
  card.addEventListener("mouseover", () => {
    // Show the button
    button.style.display = "block";
    card.classList.add("shadow");
  });

  // Add mouseout event listener to the card
  card.addEventListener("mouseout", () => {
    // Hide the button
    button.style.display = "none";
    card.classList.remove("shadow");
  });
  button.addEventListener("click", () => {
    // Toggle the visibility of the content
    content.classList.toggle("active-content");

    // Update the button text based on the visibility of the content
    if (content.classList.contains("active-content")) {
      button.innerText = "⬆ View Less";
    } else {
      button.innerText = "⬇ View More";
    }
  });
});

projectCards.forEach((project) => {
  project.addEventListener("click", () => {
    if (localStorage.getItem("currentClickedProject")) {
      localStorage.removeItem("currentClickedProject");
      localStorage.setItem("currentClickedProject", project.classList[1]);
    } else {
      localStorage.setItem("currentClickedProject", project.classList[1]);
    }
  });
});
