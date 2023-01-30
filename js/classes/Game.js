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
			.addEventListener("click", this.startGame.bind(this));
		this.moneyWallet = document.querySelector(".your-money");
		this.gameItem = document.querySelectorAll(".game__item");
		this.inputBid = document.querySelector(".bid");
		this.gameResult = document.querySelector(".stats__result");
		this.allGames = document.querySelector(".stats__games");
		this.winGames = document.querySelector(".stats__wins");
		this.lossGames = document.querySelector(".stats__losses");

		this.render();
	}

	render(
		colors = ["#05D1F8", "#F805CB", "#05D1F8"],
		money = this.wallet.getWalletMoney(),
		result = "",
		stats = [0, 0, 0],
		bid = 0,
		wonMoney = 0
	) {
		this.gameItem.forEach((item, index) => {
			item.style.backgroundColor = colors[index];
		});

		this.moneyWallet.textContent = `Wallet: ${money}`;

		if (result) {
			result = `You won $${wonMoney}`;
		} else if (!result && result !== "") {
			result = `You lost $${bid}`;
		}
		this.gameResult.textContent = result;
		this.allGames.textContent = `Your games: ${stats[0]}`;
		this.winGames.textContent = `Your wins: ${stats[1]}`;
		this.lossGames.textContent = `Your losses: ${stats[2]}`;

		this.inputBid.value = "";
	}

	startGame() {
		if (this.inputBid.value < 1) {
			return alert("Your bid is too low!");
		}
		const bid = Math.floor(this.inputBid.value);

		if (!this.wallet.checkCanPlay(bid)) {
			return alert("You dont have enough funds in your wallet!");
		}

		this.wallet.changeWallet(bid, "-");

		this.draw = new Draw();
		const colors = this.draw.getDrawResult();
		const win = Result.checkWinner(colors);
		const wonMoney = Result.moneyWinInGame(win, bid);
		this.wallet.changeWallet(wonMoney);

		this.stats.addGameToStats(win, bid);

		this.render(
			colors,
			this.wallet.getWalletMoney(),
			win,
			this.stats.showGameStats(),
			bid,
			wonMoney
		);
	}
}
