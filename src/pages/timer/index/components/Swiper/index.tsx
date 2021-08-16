import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import { useNavHeight } from '@/hooks'
import TimerList from '../TimerList'
import styles from './index.less'
import type { IPropsBar } from '../../index.d'

const Index = (props: IPropsBar) => {
	const { current, setCurrent } = props
	const { nav_height } = useNavHeight()

	return (
		<View className={styles._local}>
			<Swiper
				className='swiper'
				duration={300}
				current={current}
				onChange={({ detail: { current } }) => setCurrent(current)}
				style={{ height: `calc(100vh - ${nav_height}px - 80rpx)` }}
			>
				<SwiperItem>
					<ScrollView className='swiper_item w_100 h_100 border_box' enableFlex>
						<TimerList></TimerList>
					</ScrollView>
				</SwiperItem>
				<SwiperItem>
					<ScrollView className='swiper_item w_100 h_100 border_box' enableFlex>
						2
					</ScrollView>
				</SwiperItem>
				<SwiperItem>
					<ScrollView className='swiper_item w_100 h_100 border_box' enableFlex>
						3
					</ScrollView>
				</SwiperItem>
			</Swiper>
		</View>
	)
}

export default Taro.$memo(Index)
