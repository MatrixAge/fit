import Taro from '@tarojs/taro'
import { CustomWrapper, View, Text } from '@tarojs/components'
import { Icon } from '@/components'
import { lineRight } from '@/components/Icon/icons'
import { formatSeconds } from '@/util'
import type { IPropsTime } from '../../index.d'

const Index = (props: IPropsTime) => {
	const { ready, fit, relax, setPicker } = props

	return (
		<CustomWrapper>
			<View className='form_section w_100 border_box'>
				<View
					className='form_item w_100 border_box flex justify_between align_center bg_white'
					onClick={() =>
						setPicker({
							visible: true,
							title: '准备时间',
							key: 'ready'
						})
					}
				>
					<View className='left flex flex_column'>
						<Text className='text'>准备</Text>
						<Text className='desc color_ccc'>开始前的倒数</Text>
					</View>
					<View className='right flex align_center'>
						<Text className='value time'>
							{formatSeconds(ready, { showZero: true, noHour: true })}
						</Text>
						<Icon icon={lineRight} size={18} color='#222'></Icon>
					</View>
				</View>
				<View
					className='form_item w_100 border_box flex justify_between align_center bg_white'
					onClick={() =>
						setPicker({
							visible: true,
							title: '运动时长',
							key: 'fit'
						})
					}
				>
					<View className='left flex flex_column'>
						<Text className='text'>锻炼</Text>
						<Text className='desc color_ccc'>锻炼时间</Text>
					</View>
					<View className='right flex align_center'>
						<Text className='value time'>
							{formatSeconds(fit, { showZero: true, noHour: true })}
						</Text>
						<Icon icon={lineRight} size={18} color='#222'></Icon>
					</View>
				</View>
				<View
					className='form_item w_100 border_box flex justify_between align_center bg_white'
					onClick={() =>
						setPicker({
							visible: true,
							title: '休息时间',
							key: 'relax'
						})
					}
				>
					<View className='left flex flex_column'>
						<Text className='text'>休息</Text>
						<Text className='desc color_ccc'>休息时间</Text>
					</View>
					<View className='right flex align_center'>
						<Text className='value time'>
							{formatSeconds(relax, { showZero: true, noHour: true })}
						</Text>
						<Icon icon={lineRight} size={18} color='#222'></Icon>
					</View>
				</View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
