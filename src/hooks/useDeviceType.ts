import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

const Index = () => {
	const [type, setType] = useState<'android' | 'ios'>()

	useEffect(() => {
		Taro.getSystemInfo({
			success: (res) => {
				if (res.model.indexOf('iPhone') !== -1) {
					setType('ios')
				} else {
					setType('android')
				}
			}
		})
	}, [])

	return type
}

export default Index
