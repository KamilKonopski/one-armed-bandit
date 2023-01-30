export default class Draw {
	constructor() {
		this.color_options = ["#F00", "#0F0", "#00F"];
		let _result = this.drawResult();
		this.getDrawResult = () => _result;
	}

	drawResult() {
		const draw_colors = [];

		for (let i = 0; i < this.color_options.length; i++) {
			const index = Math.floor(Math.random() * this.color_options.length);
			const draw_color = this.color_options[index];
			draw_colors.push(draw_color);
		}
		return draw_colors;
	}
}
