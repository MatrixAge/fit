import { Fragment, useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Loader, NavBar } from '@/components'
import styles from './index.less'

interface IProps {
	children: React.ReactNode
	className?: string
	loading?: boolean
	title?: string
	bgColor?: string
	navContent?: React.ReactNode
}

const Index = (props: IProps) => {
	const { className, children, loading, title, bgColor, navContent } = props
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
			<NavBar title={title} bgColor={bgColor}>
				{navContent}
			</NavBar>
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
