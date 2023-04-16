
export const sumCount = orderGoods = orderGoods.reduce(
	(acc, item) => acc + item.count
	, 0
)

export const sumPrice = orderGoods = orderGoods.reduce(
	(acc, item) => acc + item.count * item.price
	, 0
)
