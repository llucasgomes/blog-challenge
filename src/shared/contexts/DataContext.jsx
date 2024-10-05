// 1 - criar contexto
import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const DataContext = createContext()

// 2 - criar provider
export const DataContextProvider = ({ children }) => {
	//armazenar dados de retorno da API
	const [posts, setPosts] = useState([])
	const [post, setPost] = useState([])
	const [comments, setComments] = useState([])
	const [user, setUser] = useState([])
	const [isFetching, setIsFetching] = useState(true)

	//LISTAR POSTS
	useEffect(() => {
		//conexao com a API
		api
			.get('/posts')
			.then(response => setPosts(response.data))
			.catch(err => {
				console.error(`ops! ocorreu um erro${err}`)
			})
			.finally(() => {
				setIsFetching(false)
			})
	}, [])

	//LISTAR USERS
	useEffect(() => {
		//conexao com a API
		api
			.get('/users')
			.then(response => setUser(response.data))
			.catch(err => {
				console.error(`ops! ocorreu um erro${err}`)
			})
	}, [])

	// LISTAR COMENTÁRIOS
	const fetchComments = id => {
		// scroll para o topo da página
		// window.scrollTo(0, 0)

		// conexão com a API
		api
			.get(`/posts/${id}/comments`)
			.then(response => setComments(response.data))
			.catch(err => {
				console.error(`ops! ocorreu um erro: ${err}`)
			})
	}

	return (
		<DataContext.Provider value={{ post, setPost, posts, fetchComments, comments, user, isFetching }}>
			{children}
		</DataContext.Provider>
	)
}
