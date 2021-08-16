import Taro from '@tarojs/taro'
import { CustomWrapper, View, Text, Picker } from '@tarojs/components'
import { Icon, Counter } from '@/components'
import { lineRight } from '@/components/Icon/icons'

const Index = () => {
	return (
		<CustomWrapper>
			<View className='form_section w_100 border_box'>
				<Picker mode='time' value='' onChange={() => {}}>
					<View className='form_item w_100 border_box flex justify_between align_center bg_white'>
						<View className='left flex flex_column'>
							<Text className='text'>准备</Text>
							<Text className='desc color_aaa'>开始前的倒数</Text>
						</View>
						<View className='right flex align_center'>
							<Text className='value'>00:20</Text>
							<Icon icon={lineRight} size={18} color='#eee'></Icon>
						</View>
					</View>
				</Picker>
				<Picker mode='time' value='' onChange={() => {}}>
					<View className='form_item w_100 border_box flex justify_between align_center bg_white'>
						<View className='left flex flex_column'>
							<Text className='text'>锻炼</Text>
							<Text className='desc color_aaa'>运动时长</Text>
						</View>
						<View className='right flex align_center'>
							<Text className='value'>24:00</Text>
							<Icon icon={lineRight} size={18} color='#eee'></Icon>
						</View>
					</View>
				</Picker>
				<Picker mode='time' value='' onChange={() => {}}>
					<View className='form_item w_100 border_box flex justify_between align_center bg_white'>
						<View className='left flex flex_column'>
							<Text className='text'>休息</Text>
							<Text className='desc color_aaa'>休息时间</Text>
						</View>
						<View className='right flex align_center'>
							<Text className='value'>00:45</Text>
							<Icon icon={lineRight} size={18} color='#eee'></Icon>
						</View>
					</View>
				</Picker>
				<View className='form_item w_100 border_box flex justify_between align_center bg_white'>
					<View className='left flex flex_column'>
						<Text className='text'>重复次数</Text>
						<Text className='desc color_aaa'>重复一轮是准备+锻炼+休息</Text>
					</View>
					<View className='right counter flex align_center'>
						<Counter max={100} onChange={() => {}}></Counter>
					</View>
				</View>
				<Picker mode='time' value='' onChange={() => {}}>
					<View className='form_item no_border w_100 border_box flex justify_between align_center bg_white'>
						<View className='left flex flex_column'>
							<Text className='text'>重复之间的休息</Text>
							<Text className='desc color_aaa'>
								吸入氧气，恢复肌肉活性
							</Text>
						</View>
						<View className='right flex align_center'>
							<Text className='value'>03:00</Text>
							<Icon icon={lineRight} size={18} color='#eee'></Icon>
						</View>
					</View>
				</Picker>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
