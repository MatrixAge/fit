import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { Page } from '@/components'
import {} from './components'
import type { ConnectRC } from '@/typings/dva'
import type { IProps, IPageData } from './index.d'

const Index: ConnectRC<IProps> = (props) => {
	const {} = props

	return <Page>more</Page>
}

const getInitialProps = ({ more }: IPageData) => ({
	page_data: more
})

export default Taro.$memo(connect(getInitialProps)(Index))
