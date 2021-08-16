import { useMemo } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './index.less'
import type { CSSProperties } from 'react'

interface IProps {
	icon: { outline: string; filled?: string }
	type?: 'outline' | 'filled'
	size?: number
	color?: string
}

const Index = (props: IProps) => {
	const { icon, type = 'outline', size = 20, color = '#000' } = props

	const src = useMemo(
		() =>
			'data:image/svg+xml,' +
			(icon[type] || icon['outline']).replace(/</g, '%3C').replace(/>/g, '%3E'),
		[icon, type]
	)

	const icon_styles: CSSProperties = useMemo(() => {
		let styles: CSSProperties = {}

		styles = { ...styles, width: size }
		styles = { ...styles, height: size }
		styles = { ...styles, background: color }

		// @ts-ignore
		styles = { ...styles, '-webkit-mask-image': `url("${src}")` }

		return styles
	}, [src, size, color])

	return <View className={styles.icon} style={icon_styles}></View>
}

export default Taro.$memo(Index)
