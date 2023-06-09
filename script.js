"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (const element of btnsOpenModal)
  element.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
