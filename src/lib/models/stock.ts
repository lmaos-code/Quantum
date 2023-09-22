import Rest from '$lib/helpers/rest';
import ChartData from './chartData';

export class Stock {
	// meta
	rest: Rest;

	// data
	id: number;
	name: string;
	symbol: string;
	sector?: string;
	chartData: ChartData; // TODO: Fix this type

	constructor(name?: string, id?: number, symbol?: string, sector?: string, cData?: ChartData) {
		this.rest = new Rest();
		this.id = id || 0;
		this.name = name || '';
		this.symbol = symbol || '';
		this.sector = sector || '';
		this.chartData = cData || new ChartData(this.id);
		if (this.id == 0) this.getSelf();
	}

	async getSelf(): Promise<Stock> {
		return this.rest.get<Stock>(`/stock/${this.id}`).then((res) => {
			res.rest = new Rest();
			res.chartData = new ChartData(res.id);
			return res;
		});
	}
}
