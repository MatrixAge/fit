import Taro from '@tarojs/taro'
import { Router } from 'tarojs-router-next'
import Service from '@/service'

export interface IAppModel {
	visible_login: boolean
	user: any
}

export default {
	namespace: 'app',

	state: {
		visible_login: false,
		user: Taro.getStorageSync('user') || {}
	} as IAppModel,

	effects: {}
}
