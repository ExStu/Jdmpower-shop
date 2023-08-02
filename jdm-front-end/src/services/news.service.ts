
import { axiosClassic, instance } from '@/api/api.interceptor'

import { EnumUrl } from '@/constants/url.constants'
import { INews } from '@/types/news.interface'

export const NewsService = {
	async getAll() {
		const {data} = await axiosClassic<INews[]>({
			url: EnumUrl.NEWS,
			method: 'GET'
		})

    return data
	},

	async getById(id: string | number) {
		return instance<INews>({
			url: `${EnumUrl.NEWS}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<INews>({
			url: `${EnumUrl.NEWS}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<INews>({
			url: EnumUrl.NEWS,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return instance<INews>({
			url: `${EnumUrl.NEWS}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string | number) {
		return instance<INews>({
			url: `${EnumUrl.NEWS}/${id}`,
			method: 'DELETE'
		})
	}
}
