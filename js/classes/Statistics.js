export default class Statistics {
	constructor() {
		this.gameStats = [];
	}

	addGameToStats(win, bid) {
		const gameResult = {
			win,
			bid,
		};

		this.gameStats.push(gameResult);
	}

	showGameStats() {
		const games = this.gameStats.length;
		const wins = this.gameStats.filter((stat) => stat.win).length;
		const losses = this.gameStats.filter((stat) => !stat.win).length;

		return [games, wins, losses];
	}
}
