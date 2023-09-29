import RestClient from '$lib/helpers/rest';
import ChartData from '$lib/models/chartData';
import { Stock } from '$lib/models/stock';
import type { AVSearchTickerList } from '$lib/types/tickerSearch';
import type { StockSearch } from './affordances';

export default class AlphaVantageService implements StockSearch {
	readonly rest: RestClient;

	private readonly apiKey?: string = 'FIXME';
	// this is super unsafe. This should be done in a backend service, that then returns the data to the frontend.

	constructor() {
		this.rest = new RestClient('https://www.alphavantage.co/query?');
	}
	listStocks(searchTerm: string): Promise<Stock[]> {
		return this.rest
			.get<AVSearchTickerList>('', {
				function: 'SYMBOL_SEARCH',
				keywords: searchTerm,
				apikey: this.apiKey
			})
			.then((res) => {
				console.log(res);
				return Array.from(res.bestMatches).map((entry) => {
					return new Stock(
						entry['2. name'],
						entry['1. symbol'],
						entry['3. type'],
						entry['8. currency'],
						new ChartData(entry['1. symbol'])
					);
				});
			});
	}
	getStock(/*symbol: string, seriestype: timeSeries*/): Promise<Stock> {
		return new Promise((resolve) => {
			resolve(new Stock());
		});
	}
}
