import { Container } from "../Container/Container"
import { Order } from "../Order/Order"
import style from './Catalog.module.css'
import { CatalogProduct } from "./CatalogProduct/CatalogProduct";

const goodsList = [
	{ title: 'Мясная бомба' },
	{ title: 'Супер сырный' },
	{ title: 'Сытный' },
	{ title: 'Итальянский' },
	{ title: 'Вечная классика' },
	{ title: 'Тяжелый удар' },
];

export const Catalog = () => {
	return (
		<section className={style.catalog}>
			<Container>
				<div className={style.container}>
					<Order />

					<div className={style.wrapper}>
						<h2 className={style.title}>Бургеры</h2>

						<div className={style.wrap_list}>
							<ul className={style.list}>
								{goodsList.map((item, i) => (
									<li key={i} className={style.item}>
										<CatalogProduct
											title={item.title}
										/>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Container>

		</section>
	)

}
