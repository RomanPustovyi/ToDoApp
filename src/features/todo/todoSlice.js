import { createSlice } from '@reduxjs/toolkit'
import todos from './todoMockData'

const initialState = {
    todos: [...todos],
    filter: 'All'
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        create: (state, action) => {
            console.warn('Not implemented!')
        },
        toggleTodoStatus: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload)
                    return { ...todo, isCompleted: !todo.isCompleted }
                return todo
            })
        },
        deleteOne: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        deleteAllCompleted: (state, action) => {
            console.warn('Not implemented!')
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { create, toggleTodoStatus, deleteOne, deleteAllCompleted, setFilter } = todoSlice.actions

export default todoSlice.reducer
