import { axiosClassic, instance } from '@/api/api.interceptor'

import { EnumUrl } from '@/constants/url.constants'
import { IManufacture } from '@/types/manufacture.interface'

export const ManufactureService = {
	async getAll() {
		return axiosClassic<IManufacture[]>({
			url: EnumUrl.MANUFACTURE,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<IManufacture>({
			url: `${EnumUrl.MANUFACTURE}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<IManufacture>({
			url: `${EnumUrl.MANUFACTURE}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IManufacture>({
			url: EnumUrl.MANUFACTURE,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return instance<IManufacture>({
			url: `${EnumUrl.MANUFACTURE}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string | number) {
		return instance<IManufacture>({
			url: `${EnumUrl.MANUFACTURE}/${id}`,
			method: 'DELETE'
		})
	}
}
