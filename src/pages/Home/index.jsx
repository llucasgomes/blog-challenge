import { useContext } from 'react'
import { Footer } from '../../shared/components/Footer'
import { Post } from '../../shared/components/Post'
import { DataContext } from '../../shared/contexts/DataContext'
import { Container_Posts } from './styled'

export const Home = () => {
	const { posts } = useContext(DataContext)

	return (
		<Container_Posts>
			{posts.map(item => (
				<Post key={item.id} title={item.title} desc={item.body} data={item} image={'https://placedog.net/800x600'} />
			))}
		</Container_Posts>
	)
}
