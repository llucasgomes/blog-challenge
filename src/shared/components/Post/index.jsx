import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../contexts/DataContext'
import { Container_Post } from './styled'

export const Post = ({ title, image, desc, data }) => {
	const { setPost } = useContext(DataContext)

	const handlePush = () => {
		setPost(data)

		//Caso a pagina der refresh, salvo no local storage
		localStorage.setItem('key', JSON.stringify(data))
	}

	return (
		<Container_Post>
			<div className="img">
				<img src={image} alt="" />
			</div>
			<div className="content">
				<h1>{title}</h1>

				<p>{desc}</p>
				<Link className="button" to={'/post'} onClick={() => handlePush()}>
					Read More
				</Link>
			</div>
		</Container_Post>
	)
}
