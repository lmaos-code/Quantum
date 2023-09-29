import type { Stock } from '$lib/models/stock';
import type { StockSearch } from './rest/strategies/affordances';
import AlphaVantageService from './rest/strategies/alphaVantage';

export default class SearchEngine {
	timeoutRunning: boolean = false;
	StocksService: StockSearch;

	constructor() {
		this.StocksService = new AlphaVantageService();
	}

	async bufferedStockSearch(searchTerm: string): Promise<Stock[]> {
		if (searchTerm.length < 3) return new Promise((resolve) => resolve([]));
		this.timeoutRunning == true ? true : true; // TODO: Implement a timeout for the search.
		searchTerm = searchTerm.toLowerCase();
		// TODO: Fix this. This needs first go to an information resolver, that then chooses based on env vars which StockSerive to use.

		return await this.StocksService.listStocks(searchTerm);
	}
}
