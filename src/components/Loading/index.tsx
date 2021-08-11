import Taro from '@tarojs/taro'
import { CustomWrapper, View } from '@tarojs/components'
import styles from './index.less'

interface IProps {
	visible: boolean
	maskVisible?: boolean
}

const Index = ({ visible, maskVisible }: IProps) => {
	return (
		<CustomWrapper>
			<View
				className={`
                        ${styles._local} 
                        ${visible ? styles.visible : ''} 
                        ${maskVisible ? styles.maskVisible : ''}
                  `}
			>
				<View className='wrap'>
					<View className='inner' />
					<View className='text'>loading</View>
				</View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
