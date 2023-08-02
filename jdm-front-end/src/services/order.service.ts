import { IOrder } from '@/types/order.interface'

import { instance } from '@/api/api.interceptor'

import { EnumUrl } from '@/constants/url.constants'
// import { EnumOrderStatus } from '@/types/order.interface'

// type TypeData = {
// 	status?: EnumOrderStatus
// 	items: {
// 		quantity: number
// 		price: number
// 		productId: number
// 	}[]
// }

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: EnumUrl.ORDERS,
			method: 'GET'
		})
	},

	// async getByUserId() {
	// 	return instance<IOrder[]>({
	// 		url: `${EnumUrl.ORDERS}/by-user`,
	// 		method: 'GET'
	// 	})
	// },

	// async place(data: TypeData) {
	// 	return instance<{ confirmation: { confirmation_url: string } }>({
	// 		url: EnumUrl.ORDERS,
	// 		method: 'POST',
	// 		data
	// 	})
  // }
}