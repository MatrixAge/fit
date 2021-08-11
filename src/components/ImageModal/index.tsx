import Taro from '@tarojs/taro'
import { CustomWrapper, View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { Modal } from '@/components'
import styles from './index.less'
import type { IProps as IPropsModal } from '@/components/Modal'

export interface IProps {
	visible: IPropsModal['visible']
	current: number
	contentImgs: Array<string>
	onClose: () => void
}

const Index = (props: IProps) => {
	const { visible, current, contentImgs, onClose } = props

	const close = () => {
		onClose()
	}

	return (
		<CustomWrapper>
			<Modal {...{ visible, onClose }} maskColor='rgba(0,0,0,1)'>
				<View className={styles._local}>
					<Swiper
						className='swiper'
						circular
						indicatorDots
						duration={visible ? 300 : 0}
						indicatorColor='rgba(255, 255, 255, .3)'
						indicatorActiveColor='rgba(255, 255, 255, 1)'
						style={{ height: '100vh' }}
						current={current}
					>
						{contentImgs.map((item, index) => (
							<SwiperItem
								className='swiper_item h_100 flex align_center'
								key={index}
								onClick={close}
							>
								<Image
									className='img w_100'
									src={item}
									mode='widthFix'
								></Image>
							</SwiperItem>
						))}
					</Swiper>
				</View>
			</Modal>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
