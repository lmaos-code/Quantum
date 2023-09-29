import axios, { type AxiosRequestConfig } from 'axios';

export default class RestClient {
	config: AxiosRequestConfig = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	constructor(private readonly base: string, config?: AxiosRequestConfig) {
		this.config = { ...this.config, ...config, baseURL: base };
	}

	async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
		return axios.get(url, { ...this.config, params: params }).then((res) => res.data as T);
	}
	async post<T>(url: string, params?: Record<string, unknown>): Promise<T> {
		return axios.post(url, { ...this.config, params: params }).then((res) => res.data as T);
	}
}
