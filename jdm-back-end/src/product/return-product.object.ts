import { Prisma } from '@prisma/client'
import { returnCategoryObject } from 'src/category/return-category.object'
import { returnManufactureObject } from 'src/manufacture/return-manufacture.object'
import { returnReviewObject } from 'src/review/return-review.object'

export const returnProductObject: Prisma.ProductSelect = {
	images: true,
	description: true,
	id: true,
	name: true,
	sku: true,
	price: true,
	createdAt: true,
	slug: true,
	discount: true,
	inStock: true,
	category: { select: returnCategoryObject },
	manufacture: {select: returnManufactureObject},
	reviews: {
		select: returnReviewObject,
		orderBy: {
			createdAt: 'desc'
		}
	}
}

export const returnProductObjectFullest: Prisma.ProductSelect = {
	...returnProductObject
}
