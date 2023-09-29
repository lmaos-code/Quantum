export default class ChartData {
	// data
	chart: Array<Record<string, number>>;

	constructor(private symbol: string, chart?: Array<Record<string, number>>) {
		this.symbol = symbol;
		this.chart = chart || [];
	}

	currentPrice(): number {
		return 99;
	}
	currentChange(): number {
		return 0.4;
	}

	async getSelf() {}
}
