"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const jobCards = $$(".job-card");
const projectCards = $$(".project-card");
const btnSubmit = $(".btn-submit");

jobCards.forEach((card) => {
  // Get the button element within the card
  const button = card.querySelector(".button");
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

btnSubmit.addEventListener("click", () => {
  const infomation = $(".display-none");
  const form = $(".form-email");
  const inputForm = $(".form-control");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log("regex.test(inputForm.value) :>> ");
  if (regex.test(inputForm.value)) {
    infomation.classList.remove("display-none");
    form.classList.add("display-none");
  } else {
    alert("Invalid Input Email");
  }
});
