import { useCallback } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { Page, Line } from '@/components'
import { Name, Times, Options, Bar, Dialog } from './components'
import styles from './index.less'
import type { ConnectRC } from '@/typings/dva'
import type { IModel, IProps, IPageData, IPropsName, IPropsDialog } from './index.d'

const Index: ConnectRC<IProps> = (props) => {
	const { page_data, dispatch } = props
	const { type, name, preset_name, dialog } = page_data

	const setDialog = useCallback(
		(values: Partial<IModel['dialog']>) => {
			dispatch({
				type: 'timer_edit/updateState',
				payload: {
					dialog: {
						...dialog,
						...values
					}
				}
			})
		},
		[dialog]
	)

	const setValue = useCallback((key: string, v: string | number) => {
		dispatch({
			type: 'timer_edit/updateState',
			payload: {
				[key]: v
			}
		})
	}, [])

	const closeDialog = useCallback(() => {
		dispatch({
			type: 'timer_edit/updateState',
			payload: {
				dialog: {
					visible: false,
					title: '',
					key: ''
				}
			}
		})
	}, [])

	const props_name: IPropsName = {
		name,
		preset_name,
		setDialog
	}

	const props_dialog: IPropsDialog = {
		dialog,
		closeDialog,
		setValue
	}

	return (
		<Page className={styles._local} title={type === 'add' ? '添加计时器' : '编辑计时器'}>
			<Name {...props_name}></Name>
			<Line thin color='#eee'></Line>
			<Times></Times>
			<Line thin color='#eee'></Line>
			<Options></Options>
			<Bar></Bar>
			<Dialog {...props_dialog}></Dialog>
		</Page>
	)
}

const getInitialProps = ({ timer_edit }: IPageData) => ({
	page_data: timer_edit
})

export default Taro.$memo(connect(getInitialProps)(Index))
