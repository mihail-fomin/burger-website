
export const sumCount = arr => arr.reduce(
	(acc, item) => acc + item.count
	, 0
)

export const sumPrice = arr => arr.reduce(
	(acc, item) => acc + item.count * item.price
	, 0
)
