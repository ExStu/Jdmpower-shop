import { IFullUser, IUser } from '@/types/user.interface'

import { instance } from '@/api/api.interceptor'

import { EnumUrl } from '@/constants/url.constants'

type TypeData = {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}

export const UserService = {
	async getProfile() {
		return instance<IFullUser>({
			url: `${EnumUrl.USERS}/profile`,
			method: 'GET'
		})
	},

	async updateProfile(data: TypeData) {
		return instance<IUser>({
			url: `${EnumUrl.USERS}/profile`,
			method: 'PUT',
			data
		})
	},

	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `${EnumUrl.USERS}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
