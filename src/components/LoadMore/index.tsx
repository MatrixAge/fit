import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './index.less'

interface IProps {
	visible?: boolean
	loading: boolean
	end: boolean
}

const Index = ({ visible = true, loading, end }: IProps) => {
	return (
		<View className={`${styles._local} ${visible ? styles.visible : ''}`}>
			{loading && <Text className='loading_text'>加载中...</Text>}
			{end && <Text className='loading_text'>已经到底啦～</Text>}
		</View>
	)
}

export default Taro.$memo(Index)
