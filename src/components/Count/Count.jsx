import * as React from 'react'
import style from './Count.module.css'

export const Count = ({ count, id }) => {
	const addCount = () => {

	}

	const removeCount = () => {

	}

	return (
		<div className={style.count}>
			<button className={style.minus} onClick={removeCount}>-</button>
			<p className={style.amount}>{count}</p>
			<button className={style.plus} onClick={addCount}>+</button>
		</div>
	)

}