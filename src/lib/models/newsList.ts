import type { News } from './news';

export default class NewsList {
	NewsList: News[] = [];

	constructor(private topic: string, private news?: News[]) {
		this.news = news || [];
	}

	getSelf(): News[] {
		return [];
	}
}
