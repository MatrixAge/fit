import Taro from '@tarojs/taro'

export interface IAppModel {
	tabbar_current: number
	visible_login: boolean
	user: any
}

export default {
	namespace: 'app',

	state: {
		tabbar_current: 0,
		visible_login: false,
		user: Taro.getStorageSync('user') || {}
	} as IAppModel,

	effects: {}
}
