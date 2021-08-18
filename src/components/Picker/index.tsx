import { useState, useCallback, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text } from '@tarojs/components'
import { Dialog } from '@/components'
import { useSystemInfo } from '@/hooks'
import styles from './index.less'
import type { ITouchEvent } from '@tarojs/components'

let x = 0
let y = 0
let offset_y = 0

export interface IProps {
	visible: boolean
	title: string
	range: Array<Array<any>>
	unit: Array<string>
	onOk: (v: number) => void
	onClose: () => void
}

const Index = (props: IProps) => {
	const { visible, title, range = [], unit = [], onOk, onClose } = props
	const [current_left, setCurrentLeft] = useState(58)
	const [current_right, setCurrentRight] = useState(58)
	const info = useSystemInfo()

	useEffect(() => {
		if (!visible) return

		setCurrentLeft(58)
		setCurrentRight(58)
	}, [visible])

	const onTouchStart = useCallback((e: ITouchEvent) => {
		x = 0
		y = 0
		offset_y = 0

		x = e.touches[0].clientX
		y = e.touches[0].clientY
	}, [])

	const onTouchMove = useCallback(
		(e: ITouchEvent) => {
			offset_y = e.touches[0].clientY - y
		},
		[y]
	)

	const onTouchEnd = useCallback(() => {
		if (!info?.screenWidth) return

		const offset = Math.abs(Math.round(offset_y / 40))
		const handler = x < info?.screenWidth / 2 ? setCurrentLeft : setCurrentRight
		const current = x < info?.screenWidth / 2 ? current_left : current_right

		if (offset_y > 0) {
			if (current - offset < 0) {
				handler(60 + current - offset)
			} else {
				handler(current - offset)
			}
		} else {
			if (current + offset > 59) {
				handler(current + offset - 60)
			} else {
				handler(current + offset)
			}
		}
	}, [info, x, offset_y, current_left, current_right])

	const onDialogOk = () => {
		const real_left = current_left + 2
		const real_right = current_right + 2

		const left = real_left < 60 ? real_left : real_left - 60
		const right = real_right < 60 ? real_right : real_right - 60

		onOk(left * 60 + right)
	}

	return (
		<Dialog title={title} visible={visible} onClose={onClose} onOk={onDialogOk}>
			<View className={styles._local}>
				<View
					className='top_mask picker_mask w_100 absolute left_0'
					onTouchStart={onTouchStart}
					onTouchMove={onTouchMove}
					onTouchEnd={onTouchEnd}
					onTouchCancel={onTouchEnd}
				></View>
				<View className='middle_mask w_100 absolute left_0 flex'>
					{unit.map((item, index) => (
						<View
							className='unit_item h_100 relative flex align_center'
							key={index}
						>
							<Text className='unit absolute'>{item}</Text>
						</View>
					))}
				</View>
				<View
					className='bottom_mask picker_mask w_100 absolute left_0 bottom_0'
					onTouchStart={onTouchStart}
					onTouchMove={onTouchMove}
					onTouchEnd={onTouchEnd}
					onTouchCancel={onTouchEnd}
				></View>
				{range.map((item, index) => (
					<View className='swiper_wrap' key={index}>
						<Swiper
							className='swiper'
							vertical
							circular
							duration={300}
							display-multiple-items={5}
							current={index === 0 ? current_left : current_right}
							onChange={({ detail: { current } }) =>
								index === 0
									? setCurrentLeft(current)
									: setCurrentRight(current)
							}
						>
							{item.map((it: number, idx: number) => (
								<SwiperItem
									className='swiper_item_wrap'
									skip-hidden-item-layout
									key={idx}
								>
									<View className='swiper_item w_100 h_100 font_bold border_box flex justify_center align_center'>
										{it}
									</View>
								</SwiperItem>
							))}
						</Swiper>
					</View>
				))}
			</View>
		</Dialog>
	)
}

export default Taro.$memo(Index)