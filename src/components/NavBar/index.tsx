import { Fragment, useCallback } from 'react'
import Taro, { useRouter } from '@tarojs/taro'
import { CustomWrapper, View, Button, Text } from '@tarojs/components'
import { Icon, Menu } from '@/components'
import { menu, arrowLeft } from '@/components/Icon/icons'
import { useNavHeight } from '@/hooks'
import config from '@/config'
import styles from './index.less'

interface IProps {
	children?: React.ReactNode
	title?: string
	bgColor?: string
}

const Index = (props: IProps) => {
	const { children, title = 'Fit', bgColor = 'white' } = props
	const { nav_height, status_height } = useNavHeight()
	const { path } = useRouter()

	const showMenu = useCallback(() => {
		Taro.$store.dispatch({
			type: 'app/updateState',
			payload: { visible_menu: true }
		})
	}, [])

	return (
		<CustomWrapper>
			<View className={styles._local} style={{ background: bgColor }}>
				<View
					className='nav_bar w_100 border_box fixed top_0 left_0'
					style={{ height: nav_height, paddingTop: status_height }}
				>
					<View className='content_wrap w_100 h_100 border_box flex justify_center align_center relative'>
						{config.switch_page.includes(path) ? (
							<Fragment>
								<Button
									className='btn_menu btn absolute clickable'
									hoverClass='none'
									onClick={showMenu}
								>
									<Icon
										icon={menu}
										color='#222'
										size={20}
									></Icon>
								</Button>
								<Menu></Menu>
							</Fragment>
						) : (
							<Button
								className='btn_back btn absolute clickable'
								hoverClass='none'
								onClick={() => Taro.navigateBack()}
							>
								<Icon
									icon={arrowLeft}
									color='#222'
									size={20}
								></Icon>
							</Button>
						)}
						<View className='title_wrap'>
							{children || (
								<Text className='title font_bold'>{title}</Text>
							)}
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
