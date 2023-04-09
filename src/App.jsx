import { Header } from "./components/Header/Header"
import { Navigation } from "./components/Navigation/Navigation"
import { Catalog } from "./components/Catalog/Catalog"
export const App = () => {

	return <>
		<Header />
		<main>
			<Navigation />
			<Catalog />
			<section></section>
		</main>
		<footer></footer>
	</>
}

