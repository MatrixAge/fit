import { useState, useEffect } from 'react'

const Index = () => {
	const [rendered, setRendered] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setRendered(true), 600)

		return () => clearTimeout(timer)
	}, [])

	return rendered
}

export default Index
