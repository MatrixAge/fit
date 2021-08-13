import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

const Index = () => {
	const [height, setHeight] = useState<{
		status_height: number
		bar_height: number
		nav_height: number
	}>({
		status_height: 0,
		bar_height: 0,
		nav_height: 0
	})

	useEffect(() => {
		const getHeight = async () => {
			const { statusBarHeight } = await Taro.getSystemInfo()
			const { top, height } = await Taro.getMenuButtonBoundingClientRect()

			const bar_height = (top - statusBarHeight) * 2 + height - 1

			setHeight({
				status_height: statusBarHeight,
				bar_height,
				nav_height: statusBarHeight + bar_height
			})
		}

		getHeight()
	}, [])

	return height
}

export default Index
