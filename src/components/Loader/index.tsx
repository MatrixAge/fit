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
                        ${styles.loading_wrap} 
                        ${visible ? styles.visible : ''} 
                        ${maskVisible ? styles.maskVisible : ''}
                  `}
			>
				<View className='loading'>
					<View className='icon_source_bottom icon_source' />
					<View className='icon_source_top icon_source' />
				</View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
