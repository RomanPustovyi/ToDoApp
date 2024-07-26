import { useEffect } from 'react'
import { Layout } from './components/Layout'
import { Todo } from './components/Todo'
import { store } from './store'
import { saveToLocalStorage } from './features/todo/utils'

const App = () => {
	useEffect(() => {
		store.subscribe(() => {
			setTimeout(() => {
				saveToLocalStorage(store.getState())
			}, 1000)
		})
	}, [])

	return (
		<Layout>
			<Todo />
			<div className='Hint'>
				<p>Drag and drop to reorder list</p>
			</div>
		</Layout>
	)
}

export default App
