import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { Page } from '@/components'
import { Name, Times } from './components'
import styles from './index.less'
import type { ConnectRC } from '@/typings/dva'
import type { IProps, IPageData } from './index.d'

const Index: ConnectRC<IProps> = (props) => {
	const { page_data } = props
	const { type } = page_data

	return (
		<Page className={styles._local} title={type === 'add' ? '新增计时器' : '编辑计时器'}>
			<Name></Name>
			<Times></Times>
		</Page>
	)
}

const getInitialProps = ({ timer_edit }: IPageData) => ({
	page_data: timer_edit
})

export default Taro.$memo(connect(getInitialProps)(Index))
