import { createSlice } from '@reduxjs/toolkit'
import { createId } from './utils'
import todos from './todoMockData'

const initialState = {
    todos: [...todos],
    filter: 'All'
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = [...action.payload]
        },
        create: (state, action) => {
            state.todos.unshift({
                id: createId(),
                isCompleted: action.payload.isCompleted,
                text: action.payload.text
            })
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
        deleteAllCompleted: (state) => {
            state.todos = state.todos.filter(todo => !todo.isCompleted)
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { setTodos, create, toggleTodoStatus, deleteOne, deleteAllCompleted, setFilter } = todoSlice.actions

export default todoSlice.reducer
