import { useCallback } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { Page, Line } from '@/components'
import { Name, Time, Options, Bar, Dialog, Picker } from './components'
import styles from './index.less'
import type { ConnectRC } from '@/typings/dva'
import type {
	IModel,
	IProps,
	IPageData,
	IPropsName,
	IPropsTime,
	IPropsOptions,
	IPropsDialog,
	IPropsPicker
} from './index.d'

const Index: ConnectRC<IProps> = (props) => {
	const { page_data, dispatch } = props
	const { type, name, preset_name, ready, fit, relax, times, repeat_relax, dialog, picker } =
		page_data

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

	const setPicker = useCallback(
		(values: Partial<IModel['picker']>) => {
			dispatch({
				type: 'timer_edit/updateState',
				payload: {
					picker: {
						...picker,
						...values
					}
				}
			})
		},
		[picker]
	)

	const setValue = useCallback((key: string, v: string | number) => {
		dispatch({
			type: 'timer_edit/updateState',
			payload: {
				[key]: v
			}
		})
	}, [])

	const props_name: IPropsName = {
		name,
		preset_name,
		setDialog
	}

	const props_time: IPropsTime = {
		ready,
		fit,
		relax,
		setPicker
	}

	const props_opitons: IPropsOptions = {
		times,
		repeat_relax,
		setDialog,
		setPicker
	}

	const props_dialog: IPropsDialog = {
		dialog,
		setDialog,
		setValue
	}

	const props_picker: IPropsPicker = {
		picker,
		setPicker,
		setValue
	}

	return (
		<Page className={styles._local} title={type === 'add' ? '添加计时器' : '编辑计时器'}>
			<Name {...props_name}></Name>
			<Line thin color='whitesmoke'></Line>
			<Time {...props_time}></Time>
			<Line thin color='whitesmoke'></Line>
			<Options {...props_opitons}></Options>
			<Bar></Bar>
			<Dialog {...props_dialog}></Dialog>
			<Picker {...props_picker}></Picker>
		</Page>
	)
}

const getInitialProps = ({ timer_edit }: IPageData) => ({
	page_data: timer_edit
})

export default Taro.$memo(connect(getInitialProps)(Index))
