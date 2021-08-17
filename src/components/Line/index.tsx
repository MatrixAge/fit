import { useMemo } from 'react'
import Taro from '@tarojs/taro'
import { CustomWrapper, View, Navigator } from '@tarojs/components'
import styles from './index.less'
import type { CSSProperties } from 'react'
import type { ITouchEvent } from '@tarojs/components'

interface IProps {
	children?: React.ReactNode
	width?: string
	height?: string
	radius?: number
	color?: string
	thin?: boolean
	box?: boolean
	borderSize?: number
	clickable?: boolean
	onClick?: ((event: ITouchEvent) => void) | undefined
}

const Index = (props: IProps) => {
	const {
		children,
		width = '100%',
		height = 1,
		radius = 0,
		color = '#222',
		thin = true,
		box,
		borderSize = 2,
		clickable,
		onClick
	} = props

	const getStyles: CSSProperties = useMemo(() => {
		let styles: CSSProperties = {}

		if (box) {
			styles = { ...styles, width: 'auto' }
			styles = { ...styles, height: 'auto' }
			styles = { ...styles, backgroundColor: 'transparent' }
		} else {
			styles = { ...styles, width: width }
			styles = { ...styles, height: height }
			styles = { ...styles, background: color }
		}

		styles = { ...styles, borderRadius: radius }

		return styles
	}, [])

	const getContentStyles: CSSProperties = useMemo(() => {
		let styles: CSSProperties = {}

		styles = { ...styles, border: `${borderSize}rpx solid ${color}` }
		styles = { ...styles, borderRadius: `${radius * (thin ? 2 : 1)}rpx` }

		return styles
	}, [])

	return (
		<CustomWrapper>
			<Navigator
				className={`
                              ${styles._local} 
                              ${thin ? styles.thin : ''} 
                              ${box ? styles.box : ''}
                              ${clickable ? styles.clickable : ''}
                        `}
				hoverClass='none'
				style={getStyles}
				onClick={onClick}
				url='none'
			>
				{children}
				{box && (
					<View
						className={`box ${thin ? 'thin' : ''}`}
						style={getContentStyles}
					></View>
				)}
			</Navigator>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
