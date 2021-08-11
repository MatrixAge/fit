import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

const Index = (safeArea?: boolean) => {
	const [safe, setSafe] = useState(0)

	useEffect(() => {
		Taro.getSystemInfo({
			success: (res) => {
				if (!safeArea) return setSafe(0)
				if (res.model === 'unknown') return setSafe(16)
				if (res.screenHeight === res.safeArea.bottom) return setSafe(16)

				setSafe(res.screenHeight - res.safeArea.bottom)
			}
		})
	}, [safeArea])

	return safe
}

export default Index
