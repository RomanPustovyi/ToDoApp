import { createSlice } from '@reduxjs/toolkit'
import { createId } from './utils'
import mockData from './todoMockData'

const initialState = {
    todos: mockData.todos,
    order: mockData.order,
    filter: 'All'
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.order = action.payload
        },
        create: (state, action) => {
            const id = createId()
            state.todos[id] = {
                id,
                isCompleted: action.payload.isCompleted,
                text: action.payload.text
            }
            state.order.unshift(id)
        },
        toggleTodoStatus: (state, action) => {
            state.todos = {
                ...state.todos,
                [action.payload]: {
                    ...state.todos[action.payload],
                    isCompleted: !state.todos[action.payload].isCompleted
                }
            }
        },
        deleteOne: (state, action) => {
            const todosCopy = { ...state.todos }
            delete todosCopy[action.payload]
            state.todos = todosCopy
            state.order = state.order.filter(id => id !== action.payload)
        },
        deleteAllCompleted: (state) => {
            const todosCopy = { ...state.todos }

            const todosForDeletion = Object.values(todosCopy).filter(todo => todo.isCompleted)

            const ids = todosForDeletion.map(todo => todo.id)
            state.order = state.order.filter(id => !ids.includes(id))

            todosForDeletion.forEach(todo => {
                delete todosCopy[todo.id]
            })
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { setOrder, create, toggleTodoStatus, deleteOne, deleteAllCompleted, setFilter } = todoSlice.actions

export default todoSlice.reducer
