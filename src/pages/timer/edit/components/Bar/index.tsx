import Taro from '@tarojs/taro'
import { CustomWrapper, View, Text, Button } from '@tarojs/components'
import { useSafeArea } from '@/hooks'
import styles from './index.less'

const Index = () => {
	const safe_area = useSafeArea(true)

	return (
		<CustomWrapper>
			<View className={styles._local}>
				<View
					className='content_wrap w_100 border_box flex justify_center fixed left_0 bottom_0'
					style={{ paddingBottom: safe_area + 12, height: safe_area + 12 + 44 }}
				>
					<Button
						className='btn_confirm h_100 border_box white shadow_main'
						hoverClass='none'
					>
						<Text className='text'>确认</Text>
					</Button>
				</View>
				<View
					className='content_wrap_placeholer w_100'
					style={{ height: 44 + safe_area }}
				></View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
