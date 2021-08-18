import Taro from '@tarojs/taro'
import { Picker } from '@/components'
import { range } from '@/config/time'
import type { IPropsPicker } from '../../index.d'

const Index = ({ picker, setPicker, setValue }: IPropsPicker) => {
	return (
		<Picker
			visible={picker.visible}
			title={picker.title}
			range={range}
			unit={['分钟', '秒']}
			onClose={() => setPicker({ visible: false })}
			onOk={(v) => {
				setPicker({ visible: false })
				setValue(picker.key, v)
			}}
		></Picker>
	)
}

export default Taro.$memo(Index)
