export class News {
	constructor(
		private title?: string,
		private description?: string,
		private url?: string,
		private urlToImage?: string,
		private publishedAt?: string,
		private content?: string
	) {
		this.title = title || '';
		this.description = description || '';
		this.url = url || '';
		this.urlToImage = urlToImage || '';
		this.publishedAt = publishedAt || '';
		this.content = content || '';
	}

	getSelf(): News {
		return this;
	}
}
