import { useState, useEffect, useCallback } from 'react'
import Taro from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text } from '@tarojs/components'
import { Dialog } from '@/components'
import { useRendered } from '@/hooks'
import styles from './index.less'

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
	const rendered = useRendered()

	useEffect(() => {
		if (!visible) return

		setCurrentLeft(58)
		setCurrentRight(58)
	}, [visible])

	const getStatus = useCallback(
		(index: number, idx: number) => {
			const current = index === 0 ? current_left + 2 : current_right + 2
			const offset = idx - current
			const status = offset < -2 ? 60 + offset : offset

			return status === 0
		},
		[current_left, current_right]
	)

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
				{rendered &&
					range.map((item, index) => (
						<View className='swiper_wrap' key={index}>
							<Swiper
								className='swiper'
								vertical
								circular
								duration={10}
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
										className={`
                                                                  swiper_item_wrap w_100 h_100 font_bold border_box flex justify_center align_center
                                                                  ${
												getStatus(index, idx)
													? 'active'
													: ''
											}
                                                            `}
										skip-hidden-item-layout
										key={idx}
									>
										{it}
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
