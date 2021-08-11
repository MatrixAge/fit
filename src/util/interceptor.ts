import Taro from '@tarojs/taro'
import { url } from '@/config'
import type { interceptor } from '@tarojs/taro'

const Index: interceptor = (chain) => {
	const req = chain.requestParams

	req.url = `${url.dev}${req.url}`
	req.header = { token: Taro.getStorageSync('token') || '' }

	return chain.proceed(req).then((res: any) => {
		if (!res.data.success) {
			Taro.showToast({ title: res.data.msg, icon: 'none' })

			if (res.data.code === 2005) {
				Taro.removeStorageSync('user')
				Taro.removeStorageSync('token')

				const dispatch = Taro.$store.dispatch

				dispatch({
					type: 'app/updateState',
					payload: {
						user: {},
						visible_login: true
					}
				})
			}
		}

		return res.data
	})
}

export default Index
