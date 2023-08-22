import { ICategory } from './category.interface'
import { IReview } from './review.interface'

interface Image {
	url: string
}

export interface IProduct {
	id: number
	name: string
	slug: string
	sku: string
	description: string
	price: number
	discount: number
	inStock: boolean
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
}
