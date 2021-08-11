import Taro from '@tarojs/taro'
import { CustomWrapper, View, Image, Button } from '@tarojs/components'
import { Modal } from '@/components'
import styles from './index.less'
import type { IProps as IPropsModal } from '@/components/Modal'

export interface IProps extends IPropsModal {
	okText?: string
	okVisible?: boolean
	onOk?: () => void
}

const Index = (props: IProps) => {
	const { children, okText = '确定', okVisible, onClose, onOk } = props

	return (
		<CustomWrapper>
			<Modal
				{...props}
				position='bottom'
				style={{
					backgroundColor: 'white',
					borderTopLeftRadius: 'var(--radius_modal)',
					borderTopRightRadius: 'var(--radius_modal)'
				}}
			>
				<View className={styles._local}>
					<View className='icon_wrap flex justify_center align_center absolute'>
						<Image
							className='icon_close'
							src={''}
							mode='aspectFit'
							onClick={onClose}
						></Image>
					</View>
					<View className='content_wrap'>{children}</View>
					{okVisible && (
						<View className='options_wrap w_100 border_box'>
							<Button
								className='btn_ok w_100 color_bg_gradient white'
								onClick={onOk}
							>
								{okText}
							</Button>
						</View>
					)}
				</View>
			</Modal>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
