import { Fragment, useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Loader } from '@/components'
import styles from './index.less'

interface IProps {
	children: React.ReactNode
	className?: string
	loading?: boolean
}

const Index = (props: IProps) => {
	const { className, children, loading } = props
	const [loading_loader, setLoadingLoader] = useState(false)

	useEffect(() => {
		if (loading) {
			setLoadingLoader(true)
		} else {
			const timer = setTimeout(() => {
				setLoadingLoader(false)
			}, 150)

			return () => clearTimeout(timer)
		}
	}, [loading])

	return (
		<Fragment>
			{loading_loader && <Loader visible maskVisible />}
			{!loading && (
				<View
					className={`
                                    w_100 border_box flex flex_column transition_normal
                                    ${styles._local}
                                    ${className}
                              `}
				>
					{children}
				</View>
			)}
		</Fragment>
	)
}

export default Taro.$memo(Index)
