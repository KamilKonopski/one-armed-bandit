import Game from "./classes/Game.js";

const game = new Game(200);

//modal
const openModalButton = document.getElementById("rules-btn");
const closeModalButton = document.getElementById("close-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function openModal() {
	if (modal == null) {
		return;
	}

	modal.classList.add("active");
	overlay.classList.add("active");
}

function closeModal() {
	if (modal == null) {
		return;
	}

	modal.classList.remove("active");
	overlay.classList.remove("active");
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
