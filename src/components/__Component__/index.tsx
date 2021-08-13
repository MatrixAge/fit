import Taro from '@tarojs/taro'
import { CustomWrapper, View } from '@tarojs/components'
import styles from './index.less'

interface IProps {}

const Index = (props: IProps) => {
	const {} = props

	return (
		<CustomWrapper>
			<View className={styles._local}></View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
