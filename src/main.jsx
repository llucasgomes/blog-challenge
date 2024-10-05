import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { DataContextProvider } from './shared/contexts/DataContext'
import GlobalStyle from './styles/Global'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DataContextProvider>
			<App />
			<GlobalStyle />
		</DataContextProvider>
	</React.StrictMode>
)
