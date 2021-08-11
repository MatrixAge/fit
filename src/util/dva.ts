import Taro from '@tarojs/taro'
import immer from 'dva-immer'
import loading from 'dva-loading'
import { create } from 'dva-core'

export default (options: any) => {
	const app = create(options)

	app.use(loading({}))
	app.use(immer())

	// 适配支付宝小程序
	if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
		if (!global.hasOwnProperty('registered')) {
			options.models.forEach((model: any) => app.model(model))
		}

		global['registered'] = true
	} else {
		options.models.forEach((model: any) => app.model(model))
	}

	app.start()

	app.getStore = () => app._store
	app.dispatch = app._store.dispatch

	return app
}
