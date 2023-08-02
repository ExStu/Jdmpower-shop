import axios from 'axios'
import Cookies from 'js-cookie'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { axiosClassic } from '@/api/api.interceptor'

import { getContentType } from '@/api/api.helper'
import { REFRESH_TOKEN } from '@/constants/token.constants'
import { saveToStorage } from './auth.helper'
import { instance } from '@/api/api.interceptor'
import { AUTH_STEP } from '@/constants/url.constants'
import { EnumUrl } from '@/constants/url.constants'

export const AuthService = {
	async main(type: AUTH_STEP.LOGIN | AUTH_STEP.REGISTER, data: IEmailPassword) {
		const response = await axiosClassic<IAuthResponse>({
			url: `${EnumUrl.AUTH}/${type}`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get(REFRESH_TOKEN)

		const response = await axiosClassic.post<string, { data: IAuthResponse }>(
			`${EnumUrl.AUTH}/login/access-token`,
			{ refreshToken },
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	}
}
