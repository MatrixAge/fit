import Taro from '@tarojs/taro'
import { CustomWrapper, View, Button } from '@tarojs/components'
import { Modal, Icon } from '@/components'
import { close, check } from '@/components/Icon/icons'
import styles from './index.less'
import type { IProps as IPropsModal } from '@/components/Modal'

export interface IProps extends IPropsModal {
	title?: string
	onOk?: () => void
}

const Index = (props: IProps) => {
	const { children, title, onClose, onOk } = props

	return (
		<CustomWrapper>
			<Modal
				{...props}
				position='bottom'
				style={{
					backgroundColor: 'white',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20
				}}
			>
				<View className={styles._local}>
					<Button
						className='icon_wrap btn_close flex justify_center align_center absolute'
						hoverClass='none'
						onClick={onClose}
					>
						<Icon icon={close} size={20}></Icon>
					</Button>
					{title && (
						<View className='title_wrap w_100 border_box text_center'>
							{title}
						</View>
					)}
					<Button
						className='icon_wrap btn_confirm flex justify_center align_center absolute'
						hoverClass='none'
						onClick={onOk}
					>
						<Icon icon={check} size={20} color='white'></Icon>
					</Button>
					<View className='content_wrap'>{children}</View>
				</View>
			</Modal>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
