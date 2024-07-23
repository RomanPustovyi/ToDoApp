import { createSlice } from '@reduxjs/toolkit'
import todos from './todoMockData'

const initialState = {
    todos: [...todos]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        create: (state, action) => {
            console.warn('Not implemented!')
        },
        setCompleted: (state) => {
            console.warn('Not implemented!')
        },
        deleteAllCompleted: (state, action) => {
            console.warn('Not implemented!')
        },
    }
})

export const { create, setCompleted, deleteAllCompleted } = todoSlice.actions

export default todoSlice.reducer
