import { instance } from '@/api/api.interceptor'

import { EnumUrl } from '@/constants/url.constants'

export type TypeStatisticsResponse = {
	name: string
	value: number
}[]

export const StatisticsService = {
	async getMain() {
		return instance<TypeStatisticsResponse>({
			url: `${EnumUrl.STATISTICS}/main`,
			method: 'GET'
		})
	}
}
