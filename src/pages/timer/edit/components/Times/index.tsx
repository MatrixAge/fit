import Taro from '@tarojs/taro'
import { CustomWrapper, View, Text, Picker } from '@tarojs/components'
import { Icon } from '@/components'
import { lineRight } from '@/components/Icon/icons'

const Index = () => {
	return (
		<CustomWrapper>
			<View className='form_section w_100 border_box'>
				<Picker mode='time' value='' onChange={() => {}}>
					<View className='form_item w_100 border_box flex justify_between align_center bg_white'>
						<View className='left flex flex_column'>
							<Text className='text'>准备</Text>
							<Text className='desc color_ccc'>开始前的倒数</Text>
						</View>
						<View className='right flex align_center'>
							<Text className='value time'>00:20</Text>
							<Icon icon={lineRight} size={18} color='#222'></Icon>
						</View>
					</View>
				</Picker>
				<Picker mode='time' value='' onChange={() => {}}>
					<View className='form_item w_100 border_box flex justify_between align_center bg_white'>
						<View className='left flex flex_column'>
							<Text className='text'>锻炼</Text>
							<Text className='desc color_ccc'>运动时长</Text>
						</View>
						<View className='right flex align_center'>
							<Text className='value time'>24:00</Text>
							<Icon icon={lineRight} size={18} color='#222'></Icon>
						</View>
					</View>
				</Picker>
				<Picker mode='time' value='' onChange={() => {}}>
					<View className='form_item w_100 border_box flex justify_between align_center bg_white'>
						<View className='left flex flex_column'>
							<Text className='text'>休息</Text>
							<Text className='desc color_ccc'>休息时间</Text>
						</View>
						<View className='right flex align_center'>
							<Text className='value time'>00:45</Text>
							<Icon icon={lineRight} size={18} color='#222'></Icon>
						</View>
					</View>
				</Picker>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
