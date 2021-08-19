import Taro from '@tarojs/taro'
import { CustomWrapper, View, Text } from '@tarojs/components'
import styles from './index.less'
import type { IPropsSwiper } from '../../index.d'

const tab_list = [{ name: '计时器' }, { name: '编组' }, { name: '计划' }]

const Index = (props: IPropsSwiper) => {
	const { current, setCurrent } = props

	return (
		<CustomWrapper>
			<View className={styles._local}>
				<View className='tab_items w_100 border_box flex color_bg_sub fixed top_0 left_0'>
					<Text
						className={`active_line absolute transition_normal current_${current}`}
					></Text>
					{tab_list.map((item, index) => (
						<View
							className={`
                                                tab_item flex justify_center align_center transition_normal
                                                ${current === index ? 'active' : ''}
                                          `}
							key={index}
							onClick={() => setCurrent(index)}
						>
							<Text className='name'>{item.name}</Text>
						</View>
					))}
				</View>
				<View className='tab_items_placeholder w_100'></View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
