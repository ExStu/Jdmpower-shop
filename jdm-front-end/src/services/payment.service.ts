import { IPaymentResponse } from '@/types/payment.interface'

import { instance } from '@/api/api.interceptor'

import { EnumUrl } from '@/constants/url.constants'

export const PaymentService = {
	async createPayment(amount: number) {
		return instance.post<IPaymentResponse>(EnumUrl.PAYMENT, {
			amount
		})
	}
}
