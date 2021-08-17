import { useCallback } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { Page } from '@/components'
import { Swiper } from './components'
import styles from './index.less'
import type { ConnectRC } from '@/typings/dva'
import type { IModel, IProps, IPageData, IPropsSwiper } from './index.d'

const tab_list = [{ name: '计时' }, { name: '组合' }, { name: '计划' }]

const Index: ConnectRC<IProps> = (props) => {
	const { page_data, dispatch } = props
	const { current } = page_data

	const setCurrent = useCallback((current: IModel['current']) => {
		dispatch({
			type: 'timer/updateState',
			payload: { current } as IModel
		})
	}, [])

	const props_swiper: IPropsSwiper = {
		current,
		setCurrent
	}

	return (
		<Page
			className={styles._local}
			navContent={
				<View className='tab_items border_box flex'>
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
			}
		>
			<Swiper {...props_swiper}></Swiper>
		</Page>
	)
}

const getInitialProps = ({ timer }: IPageData) => ({
	page_data: timer
})

export default Taro.$memo(connect(getInitialProps)(Index))
