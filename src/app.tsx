import Taro from '@tarojs/taro'
import { Provider } from 'react-redux'
import { addInterceptor } from '@tarojs/taro'
import interceptor from '@/util/interceptor'
import createApp from '@/util/dva'
import models from '@/util/model'
import { memo } from '@/util/op'
import '@/util/override'
import '@/util/middleware'
import './app.less'

addInterceptor(interceptor)

const store = createApp({ models: models }).getStore()

Taro.$memo = memo
Taro.$store = store

export default ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}
