import { API_URI } from '../../../const'
import style from './CatalogProduct.module.css'

export const CatalogProduct = ({ item }) => (

	<article className={style.product}>
		<img src={`${API_URI}/${item.image}`} alt={item.title} className={style.image} />

		<p className={style.price}>{item.price}<span className="currency">₽</span></p>

		<h3 className={style.title}>
			<button className={style.detail}>{item.title}</button>
		</h3>

		<p className={style.weight}>{item.weight}</p>

		<button className={style.add} type="button">Добавить</button>
	</article>

)