import { TypeProductData } from '@/services/product/product.types'
import { IProduct } from '@/types/product.interface'
// import { IProduct } from '@/types/product.interface'

interface Image {
  url: string
}

export interface IProductEditInput extends IProduct {
  categoryId: number
  manufactureId: number
  image: string
  // categories: string[]
}

// export interface IProduct {
// 	id: number
// 	name: string
// 	slug: string
// 	sku: string
// 	description: string
// 	price: number
// 	discount: number
// 	inStock: boolean
// 	reviews: IReview[]
// 	images: string[]
// 	createdAt: string
// 	category: ICategory
// }