import { Container_Comment } from './styled'

export const Comment = ({ data }) => {
	return (
		<Container_Comment>
			<div className="user">
				<img src="https://queridojeito.com/wp-content/uploads/2016/09/Autor-Desconhecido.jpg" alt="" />
				<div className="info">
					<span>{data.email}</span>
					<p>{data.body}</p>
				</div>
			</div>
		</Container_Comment>
	)
}
