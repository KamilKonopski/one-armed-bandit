import Wallet from "./Wallet.js";
import Statistics from "./Statistics.js";
import Draw from "./Draw.js";
import Result from "./Result.js";

export default class Game {
	constructor(startMoney) {
		this.wallet = new Wallet(startMoney);
		this.stats = new Statistics();

		document
			.getElementById("spin-btn")
			.addEventListener("click", this.startGame);
		this.moneyWallet = document.querySelector(".your-money");
		this.gameItem = document.querySelectorAll(".game__item");
		this.inputBid = document.querySelector(".bid");
		this.gameResult = document.querySelector(".stats__result");
		this.allGames = document.querySelector(".stats__games");
		this.winGames = document.querySelector(".stats__wins");
		this.lossGames = document.querySelector(".stats__losses");
	}
}
