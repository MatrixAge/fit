import { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { View, ScrollView, Text, Image } from '@tarojs/components'
import { Modal, Icon, Line } from '@/components'
import { useNavHeight } from '@/hooks'
import { person } from '@/components/Icon/icons'
import styles from './index.less'
import type { ConnectRC } from '@/typings/dva'
import type { IProps, IPageData } from './index.d'

const Index: ConnectRC<IProps> = (props) => {
	const { visible, dispatch } = props
	const { status_height, bar_height, nav_height } = useNavHeight()

	const hideMenu = useCallback(() => {
		dispatch({
			type: 'app/updateState',
			payload: { visible_menu: false }
		})
	}, [])

	return (
		<Modal
			visible={visible}
			position='left'
			safeArea={false}
			onClose={hideMenu}
			style={{
				width: 'calc(100% - 100px)',
				height: '100vh',
				backgroundColor: 'white',
				boxSizing: 'border-box',
				paddingTop: status_height
			}}
		>
			<View className={styles._local}>
				<View
					className='user_wrap w_100 border_box flex flex_column justify_center align_center'
					style={{ height: bar_height + 150 }}
				>
					{/* <View className='top flex flex_column justify_center align_center'>
						<View className='icon_wrap border_box flex justify_center align_center'>
							<Icon icon={person} size={24} color='white'></Icon>
						</View>
						<Text className='user_name'>未登录，点击登录</Text>
                              </View> */}
					<View className='top flex flex_column justify_center align_center'>
						<Image
							className='icon_wrap'
							mode='aspectFill'
							src='https://images.unsplash.com/photo-1629223025308-e6e28a259984?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=60'
						></Image>
						<Text className='user_name'>了不起的盖茨比</Text>
					</View>
					<View className='stat_items w_100 border_box flex justify_between align_center'>
						<View className='stat_item flex flex_column align_center'>
							<View className='value'>
								<Text className='text'>936</Text>
								<Text className='unit'>h</Text>
							</View>
							<Text className='label'>健身时长</Text>
						</View>
						<View className='stat_item flex flex_column align_center'>
							<View className='value'>
								<Text className='text'>36</Text>
							</View>
							<Text className='label'>完成计划</Text>
						</View>
						<View className='stat_item flex flex_column align_center'>
							<View className='value'>
								<Text className='text'>36</Text>
								<Text className='unit'>kj</Text>
							</View>
							<Text className='label'>减少脂肪</Text>
						</View>
					</View>
				</View>
				<Line thin color='whitesmoke'></Line>
				<ScrollView
					className='option_items w_100'
					scrollY
					enableFlex
					style={{ height: `calc(100vh - ${nav_height + 153}px)` }}
				></ScrollView>
				<Line thin color='whitesmoke'></Line>
			</View>
		</Modal>
	)
}

const getInitialProps = ({ app }: IPageData) => ({
	visible: app.visible_menu
})

export default Taro.$memo(connect(getInitialProps)(Index))
