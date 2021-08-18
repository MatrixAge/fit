import Taro from '@tarojs/taro'
import { CustomWrapper, View, Text } from '@tarojs/components'
import { Icon } from '@/components'
import { lineRight } from '@/components/Icon/icons'
import type { IPropsName } from '../../index.d'

const Index = ({ name, preset_name, setDialog }: IPropsName) => {
	return (
		<CustomWrapper>
			<View className='form_section w_100 border_box'>
				<View
					className='form_item w_100 border_box flex justify_between align_center bg_white'
					onClick={() =>
						setDialog({
							visible: true,
							title: '运动名称',
							key: 'name'
						})
					}
				>
					<View className='left flex flex_column'>
						<Text className='text'>输入运动名称</Text>
					</View>
					<View className='right flex align_center'>
						<Text className='value'>{name}</Text>
						<Icon icon={lineRight} size={18} color='#222'></Icon>
					</View>
				</View>
				<View className='form_item w_100 border_box flex justify_between align_center bg_white'>
					<View className='left flex flex_column'>
						<Text className='text'>选择预设</Text>
					</View>
					<View className='right flex align_center'>
						<Text className='value'>{preset_name}</Text>
						<Icon icon={lineRight} size={18} color='#222'></Icon>
					</View>
				</View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
