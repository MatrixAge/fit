import Taro from '@tarojs/taro'
import { CustomWrapper, View, Text, Button } from '@tarojs/components'
import { Icon } from '@/components'
import { settings } from '@/components/Icon/icons'
import styles from './index.less'
import type { IPropsBar } from '../../index.d'

const tab_list = [{ name: '计时' }, { name: '组合' }, { name: '计划' }]

const Index = (props: IPropsBar) => {
	const { current, setCurrent } = props

	return (
		<CustomWrapper>
			<View className={styles._local}>
				<View className='tab w_100 border_box fixed left_0 flex justify_between align_center'>
					<View className='tab_items h_100 border_box flex'>
						{tab_list.map((item, index) => (
							<Button
								className={`
                                                      tab_item flex justify_center align_center
                                                      ${current === index ? 'active' : ''}
                                                `}
								hoverClass='none'
								key={index}
								onClick={() => setCurrent(index)}
							>
								<Text className='name'>{item.name}</Text>
							</Button>
						))}
					</View>
					<Button
						className='right_wrap border_box flex align_center'
						hoverClass='none'
					>
						<Icon icon={settings} size={12}></Icon>
						<Text className='text'>设置</Text>
					</Button>
				</View>
				<View className='tab_placeholder w_100'></View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
