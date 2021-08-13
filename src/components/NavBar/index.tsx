import Taro, { useRouter } from '@tarojs/taro'
import { CustomWrapper, View, Image, Button, Text } from '@tarojs/components'
import { Icon } from '@/components'
import { lineLeft } from '@/components/Icon/icons'
import { useNavHeight } from '@/hooks'
import config from '@/config'
import styles from './index.less'

interface IProps {
	title?: string
}

const Index = (props: IProps) => {
	const { title = 'Fit' } = props
	const { nav_height, status_height } = useNavHeight()
	const { path } = useRouter()

	return (
		<CustomWrapper>
			<View className={styles._local}>
				<View
					className='nav_bar w_100 border_box fixed top_0 left_0'
					style={{ height: nav_height, paddingTop: status_height }}
				>
					<View className='content_wrap w_100 h_100 border_box flex justify_center align_center relative'>
						{config.switch_page.includes(path) ? (
							<View className='logo_wrap flex justify_center align_center bg_black absolute'>
								<Image
									className='logo absolute'
									mode='aspectFit'
									src={require('@/assets/images/logo_white.svg')}
								></Image>
							</View>
						) : (
							<Button
								className='btn_back absolute clickable'
								hoverClass='bg_transparent'
								onClick={() => Taro.navigateBack()}
							>
								<Icon icon={lineLeft} color='#222' size={20}></Icon>
							</Button>
						)}
						<View className='title_wrap'>
							<Text className='title font_bold'>{title}</Text>
						</View>
					</View>
				</View>
				<View
					className='nav_bar_placeholder  w_100 border_box'
					style={{ height: nav_height }}
				></View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
