import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

const Index = () => {
	const [info, setInfo] = useState<Taro.getSystemInfo.Result>()

	useEffect(() => {
		Taro.getSystemInfo({
			success: (res) => {
				setInfo(res)
			}
		})
	}, [])

	return info
}

export default Index
