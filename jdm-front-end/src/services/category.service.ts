import { ICategory } from '@/types/category.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

import { EnumUrl } from '@/constants/url.constants'

export const CategoryService = {
	async getAll() {
		return axiosClassic<ICategory[]>({
			url: EnumUrl.CATEGORY,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<ICategory>({
			url: `${EnumUrl.CATEGORY}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<ICategory>({
			url: `${EnumUrl.CATEGORY}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<ICategory>({
			url: EnumUrl.CATEGORY,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return instance<ICategory>({
			url: `${EnumUrl.CATEGORY}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${EnumUrl.CATEGORY}/${id}`,
			method: 'DELETE'
		})
	}
}
