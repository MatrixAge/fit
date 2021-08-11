import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { Page } from '@/components'
import {} from './components'
import type { ConnectRC } from '@/typings/dva'
import type { IProps, IPageData } from './index.d'

const Index: ConnectRC<IProps> = (props) => {
	const {} = props

	return <Page>123</Page>
}

const getInitialProps = ({ timer }: IPageData) => ({
	page_data: timer
})

export default Taro.$memo(connect(getInitialProps)(Index))
