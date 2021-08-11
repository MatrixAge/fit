import { useState, useRef, useEffect, useCallback } from 'react'
import Taro from '@tarojs/taro'
import { CustomWrapper, View } from '@tarojs/components'
import { useSafeArea } from '@/hooks'
import styles from './index.less'
import type { CSSProperties } from 'react'

export interface IProps {
	children: React.ReactNode
	className?: string
	visible: boolean
	position?: 'center' | 'top' | 'bottom' | 'left' | 'right'
	zIndex?: number
	maskVisible?: boolean
	maskClosable?: boolean
	maskColor?: string
	safeArea?: boolean
	style?: CSSProperties
	onClose?: () => void
}

const Index = (props: IProps) => {
	const [s_visible, setVisible] = useState(false)
	const [s_mask_background, setMaskBackground] = useState('rgba(0,0,0,0)')
	const [s_style, setStyle] = useState({})
	const timer = useRef<NodeJS.Timeout>()
	const {
		children,
		className,
		visible,
		position = 'center',
		zIndex = 100,
		maskVisible = true,
		maskClosable = true,
		maskColor = 'rgba(0,0,0,0.6)',
		safeArea = true,
		style,
		onClose
	} = props

	const safe_area = useSafeArea(safeArea)

	useEffect(() => {
		if (visible) {
			setVisible(true)
			setMaskBackground(maskVisible ? maskColor : 'transparent')
			setStyle(getPositionStyle()[position].show)
		} else {
			setMaskBackground('transparent')
			setStyle(getPositionStyle()[position].hide)

			timer.current = setTimeout(() => {
				setVisible(false)
			}, 300)
		}

		return () => clearTimeout(Number(timer.current))
	}, [visible])

	const close = useCallback(() => {
		if (onClose) onClose()
	}, [])

	const getPositionStyle = () => {
		return {
			center: {
				show: { opacity: '1', transform: 'scale(1)', transformOrigin: 'center' },
				hide: { opacity: '0', transform: 'scale(0.81)', transformOrigin: 'center' }
			},
			top: {
				show: { transform: 'translateY(0)' },
				hide: { transform: 'translateY(-120%)' }
			},
			bottom: {
				show: { transform: 'translateY(0)' },
				hide: { transform: 'translateY(120%)' }
			},
			left: {
				show: { transform: 'translateX(0)' },
				hide: { transform: 'translateX(-120%)' }
			},
			right: {
				show: { transform: 'translateX(0)' },
				hide: { transform: 'translateX(120%)' }
			}
		}
	}

	return (
		<CustomWrapper>
			<View
				className={styles._local}
				style={{ zIndex, visibility: s_visible ? 'visible' : 'hidden' }}
			>
				<View className='dialog_wrap' catchMove>
					<View
						className='mask'
						style={{ backgroundColor: s_mask_background }}
						onClick={maskClosable ? close : undefined}
					></View>
					<View
						className={`
                                    dialog
                                    ${position} ${className}
                              `}
						style={{
							...s_style,
							...style,
							paddingBottom: safe_area
						}}
					>
						{children}
					</View>
				</View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
