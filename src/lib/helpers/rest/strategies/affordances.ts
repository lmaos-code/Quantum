import type { Stock } from '$lib/models/stock';
import type { timeSeries } from '$lib/types/timeSeries';

// An interface that implements the StockSearch interface can be used to get informations about the stock market.
export interface StockSearch {
	listStocks(searchTerm: string): Promise<Stock[]>;
	getStock(symbol: string, seriestype: timeSeries): Promise<Stock>;
}
