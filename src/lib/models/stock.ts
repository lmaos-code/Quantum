import type ChartData from './chartData';

export class Stock {
	constructor(
		readonly name?: string,
		readonly symbol?: string,
		private sector?: string,
		readonly currency?: string, //  TODO: Add a currency type.
		private cData?: ChartData
	) {
		if (this.symbol == undefined) {
			this.getSelf();
		}
	}

	async getSelf(): Promise<Stock> {
		return new Stock(); // TODO: Fix this.
		/**This first needs to go to a InformationResolver, that then chooses based on env vars which StockSerive to use. Or this could */
	}

	get currentPrice(): number {
		if (this.cData == undefined) return -1;
		return this.cData.currentPrice();
	}
	get changeToday(): number {
		if (this.cData == undefined) return -1;
		return this.cData.currentChange();
	}
}
