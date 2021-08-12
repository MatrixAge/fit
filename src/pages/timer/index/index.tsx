import { useCallback } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { Page } from '@/components'
import { Bar, Swiper } from './components'
import styles from './index.less'
import type { ConnectRC } from '@/typings/dva'
import type { IModel, IProps, IPageData, IPropsBar, IPropsSwiper } from './index.d'

const Index: ConnectRC<IProps> = (props) => {
	const { page_data, dispatch } = props
	const { current } = page_data

	const setCurrent = useCallback((current: IModel['current']) => {
		dispatch({
			type: 'timer/updateState',
			payload: { current } as IModel
		})
	}, [])

	const props_bar: IPropsBar = {
		current,
		setCurrent
	}

	const props_swiper: IPropsSwiper = {
		current,
		setCurrent
	}

	return (
		<Page className={styles._local}>
			<Bar {...props_bar}></Bar>
			<Swiper {...props_swiper}></Swiper>
		</Page>
	)
}

const getInitialProps = ({ timer }: IPageData) => ({
	page_data: timer
})

export default Taro.$memo(connect(getInitialProps)(Index))
