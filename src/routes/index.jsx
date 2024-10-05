import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Page_Description } from '../pages/Description'
import { Home } from '../pages/Home'
import { Footer } from '../shared/components/Footer'
import { Header } from '../shared/components/Header'

export const Rotas = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/post" element={<Page_Description />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}
