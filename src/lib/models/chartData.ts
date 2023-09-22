import Rest from '../helpers/rest';

export default class ChartData {
	// meta
	rest: Rest;
	// data
	id: number;
	chart: Array<Record<string, number>>;

	constructor(id: number, chart?: Array<Record<string, number>>) {
		this.id = id;
		this.chart = chart || [];
		// only get chart data if id is not 0
		if (this.id != 0) this.getSelf();
		this.rest = new Rest();
	}

	async getSelf() {
		this.chart = await this.rest
			.get<Array<Record<string, number>>>(`/api/stock/${this.id}/chart`)
			.then((res) => res);
	}
}
