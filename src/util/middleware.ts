import Taro from '@tarojs/taro'
import { registerMiddlewares } from 'tarojs-router-next'
import type { Middleware } from 'tarojs-router-next'

const exclude = ['']

const middleware: Middleware = async (ctx, next) => {
	const token = Taro.getStorageSync('token')
	const dispatch = Taro.$store.dispatch

	// if (!exclude.includes(ctx.route.url)) {
	// 	if (!token) {
	// 		dispatch({
	// 			type: 'app/updateState',
	// 			payload: { visible_login: true }
	// 		})

	// 		throw Error('该页面必须要登陆：' + ctx.route.url)
	// 	}
	// }

	await next()
}

registerMiddlewares([middleware])
