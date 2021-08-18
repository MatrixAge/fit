import Taro from '@tarojs/taro'
import { CustomWrapper, View, Text } from '@tarojs/components'
import { Icon } from '@/components'
import { lineRight } from '@/components/Icon/icons'
import { formatSeconds } from '@/util'
import type { IPropsOptions } from '../../index.d'

const Index = ({ times, repeat_relax, setDialog, setPicker }: IPropsOptions) => {
	return (
		<CustomWrapper>
			<View className='form_section no_top w_100 border_box'>
				<View
					className='form_item w_100 border_box flex justify_between align_center bg_white'
					onClick={() =>
						setDialog({
							visible: true,
							title: '重复次数',
							key: 'times'
						})
					}
				>
					<View className='left flex flex_column'>
						<Text className='text'>重复次数</Text>
						<Text className='desc color_ccc'>重复一轮是准备+锻炼+休息</Text>
					</View>
					<View className='right flex align_center'>
						<Text className='value'>{times}次</Text>
						<Icon icon={lineRight} size={18} color='#222'></Icon>
					</View>
				</View>
				<View
					className='form_item w_100 border_box flex justify_between align_center bg_white'
					onClick={() =>
						setPicker({
							visible: true,
							title: '重复之间的休息时间',
							key: 'repeat_relax'
						})
					}
				>
					<View className='left flex flex_column'>
						<Text className='text'>重复之间的休息</Text>
						<Text className='desc color_ccc'>吸入氧气，恢复肌肉活性</Text>
					</View>
					<View className='right flex align_center'>
						<Text className='value time'>
							{formatSeconds(repeat_relax, {
								showZero: true,
								noHour: true
							})}
						</Text>
						<Icon icon={lineRight} size={18} color='#222'></Icon>
					</View>
				</View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
