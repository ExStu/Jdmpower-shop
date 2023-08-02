import { IReview } from '@/types/review.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

import { EnumUrl } from '@/constants/url.constants'

type TypeData = {
	rating: number
	text: string
}

export const ReviewService = {
	async getAll() {
		return axiosClassic<IReview[]>({
			url: EnumUrl.REVIEWS,
			method: 'GET'
		})
	},

	// async getAverageByProduct(productId: string | number) {
	// 	return axiosClassic<number>({
	// 		url: `${EnumUrl.REVIEWS}/average-by-product/${productId}`,
	// 		method: 'GET'
	// 	})
	// },

	async leave(productId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${EnumUrl.REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		})
	}
}
