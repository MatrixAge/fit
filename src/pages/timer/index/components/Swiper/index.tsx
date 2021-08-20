import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import { useNavHeight } from '@/hooks'
import TimerList from '../TimerList'
import styles from './index.less'
import type { IPropsSwiper } from '../../index.d'

const Index = (props: IPropsSwiper) => {
	const { current, setCurrent } = props
	const { nav_height } = useNavHeight()

	return (
		<View className={styles._local}>
			<Swiper
				className='swiper'
				duration={300}
				current={current}
				onChange={({ detail: { current } }) => setCurrent(current)}
				style={{ height: `calc(100vh - ${nav_height}px)` }}
			>
				<SwiperItem skip-hidden-item-layout>
					<ScrollView
						className='swiper_item w_100 h_100 border_box'
						scrollY
						enableFlex
					>
						<TimerList></TimerList>
					</ScrollView>
				</SwiperItem>
				<SwiperItem skip-hidden-item-layout>
					<ScrollView
						className='swiper_item w_100 h_100 border_box'
						scrollY
						enableFlex
					>
						123
					</ScrollView>
				</SwiperItem>
				<SwiperItem skip-hidden-item-layout>
					<ScrollView
						className='swiper_item w_100 h_100 border_box'
						scrollY
						enableFlex
					>
						456
					</ScrollView>
				</SwiperItem>
			</Swiper>
		</View>
	)
}

export default Taro.$memo(Index)
