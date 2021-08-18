const duration = Array(60)
	.fill(undefined)
	.reduce((total, _, index) => {
		if (index < 10) {
			total.push(`0${index}`)
		} else {
			total.push(`${index}`)
		}

		return total
	}, [])

export const range = [duration, duration]
