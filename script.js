const cards = document.querySelectorAll(".card");

function toggleModalWindow(card) {
  const modalWindow = card.querySelector(".card__modal");
  modalWindow.classList.toggle("card__modal_opened");
}

for (let card of cards) {
  const link = card.querySelector(".card__important");
  const modalCloseButton = card.querySelector(".card__modal-close");
  console.log(modalCloseButton);

  link.addEventListener("click", () => toggleModalWindow(card));
  modalCloseButton.addEventListener("click", () => toggleModalWindow(card));
}
