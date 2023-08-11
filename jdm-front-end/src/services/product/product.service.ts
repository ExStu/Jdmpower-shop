import { IProduct, TypePaginationProducts } from '@/types/product.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

import { EnumUrl } from '@/constants/url.constants'

import {
	TypeProductData,
	TypeProductDataFilters
} from './product.types'

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		const {data} = await axiosClassic<TypePaginationProducts>({
			url: EnumUrl.PRODUCTS,
			method: 'GET',
			params: queryData
		})

    return data
	},

	async getSimilar(id: string | number) {
		return axiosClassic<IProduct[]>({
			url: `${EnumUrl.PRODUCTS}/similar/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<IProduct>({
			url: `${EnumUrl.PRODUCTS}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getBySku(sku: string) {
		return axiosClassic<IProduct>({
			url: `${EnumUrl.PRODUCTS}/${sku}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${EnumUrl.PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async getByManufacture(manufactureSlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${EnumUrl.MANUFACTURE}/by-manufacture/${manufactureSlug}`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<IProduct>({
			url: `${EnumUrl.PRODUCTS}/${id}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IProduct>({
			url: EnumUrl.PRODUCTS,
			method: 'POST'
		})
	},

	async update(id: string | number, data: TypeProductData) {
		return instance<IProduct>({
			url: `${EnumUrl.PRODUCTS}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IProduct>({
			url: `${EnumUrl.PRODUCTS}/${id}`,
			method: 'DELETE'
		})
	}
}
