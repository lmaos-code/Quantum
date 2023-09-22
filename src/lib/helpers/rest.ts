import axios from 'axios';

export default class Rest {
	async get<T>(url: string): Promise<T> {
		return axios.get(url).then((res) => res.data as T);
	}
}
