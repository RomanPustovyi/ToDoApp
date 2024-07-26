import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo/todoSlice'
import { loadStateFromLocalStorage } from './features/todo/utils'

export const store = configureStore({
	reducer: {
		todoReducer
	},
	preloadedState: loadStateFromLocalStorage()
})
