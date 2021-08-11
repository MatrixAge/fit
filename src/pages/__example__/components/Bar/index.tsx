import Taro from '@tarojs/taro'
import { CustomWrapper, View } from '@tarojs/components'
import styles from './index.less'

const Index = () => {
	return (
		<CustomWrapper>
			<View className={styles._local}></View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
