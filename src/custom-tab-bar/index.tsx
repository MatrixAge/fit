import { useCallback } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Icon } from '@/components'
import { useSafeArea } from '@/hooks'
import { timer, video, shop } from '@/components/Icon/icons'
import styles from './index.less'
import type { ConnectRC } from '@/typings/dva'
import type { IProps, IPageData } from './index.d'

const list = [
	{
		text: '健身',
		pagePath: 'pages/timer/index/index',
		icon: timer
	},
	{
		text: '示范',
		pagePath: 'pages/exa/index/index',
		icon: video
	},
	{
		text: '课程',
		pagePath: 'pages/more/index/index',
		icon: shop
	}
]

const Index: ConnectRC<IProps> = (props) => {
	const { current, visible, dispatch } = props
	const safe_area = useSafeArea(true, true)

	const onTab = useCallback((index: number, path: string) => {
		dispatch({
			type: 'app/updateState',
			payload: { current_tab: index }
		})

		Taro.switchTab({ url: `/${path}` })
	}, [])

	return (
		<View className={`${styles._local} ${visible ? styles.styles : styles.invisible}`}>
			<View
				className='tab_bar'
				style={{ height: safe_area + 69, paddingBottom: safe_area }}
			>
				{list.map((item, index) => (
					<View
						className='list_item'
						key={index}
						onClick={() => onTab(index, item.pagePath)}
					>
						<Icon
							icon={item.icon}
							size={25}
							color={index === current ? '#222' : '#bbb'}
						></Icon>
						<Text className={index === current ? 'name active' : 'name'}>
							{item.text}
						</Text>
					</View>
				))}
			</View>
			<View className='tab_bar_placeholder' style={{ height: safe_area + 69 }}></View>
		</View>
	)
}

const getInitialProps = ({ app }: IPageData) => ({
	current: app.current_tab,
	visible: !app.visible_menu
})

export default Taro.$memo(connect(getInitialProps)(Index))
