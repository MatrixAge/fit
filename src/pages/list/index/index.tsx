import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { Page } from '@/components'
import {} from './components'
import type { ConnectRC } from '@/typings/dva'
import type { IProps, IPageData } from './index.d'

const Index: ConnectRC<IProps> = (props) => {
	const {} = props

	return <Page>list</Page>
}

const getInitialProps = ({ list }: IPageData) => ({
	page_data: list
})

export default Taro.$memo(connect(getInitialProps)(Index))
