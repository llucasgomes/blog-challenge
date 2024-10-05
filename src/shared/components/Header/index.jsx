import { Code, Notepad } from 'phosphor-react'
import { Container } from './styled'

export const Header = () => {
	return (
		<Container>
			<Notepad size={96} weight="duotone" />
			<div className="title-subtitle">
				<h1 className="title">Blog</h1>
				<h2 className="subtitle">Making a dev happy</h2>
			</div>
			<Code size={96} weight="duotone" />
		</Container>
	)
}
