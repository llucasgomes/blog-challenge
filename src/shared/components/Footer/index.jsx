import { Code } from 'phosphor-react'
import { Container_Footer } from './styled'

export const Footer = () => {
	return (
		<Container_Footer>
			<Code size={50} weight="duotone" color="white" />
			<span>
				Feito com ♥️ e <b>React.js</b>.
			</span>
		</Container_Footer>
	)
}
