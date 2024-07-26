import { useSelector, useDispatch } from 'react-redux'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
    deleteOne,
    toggleTodoStatus as _toggleTodoStatus,
    deleteAllCompleted as _deleteAllCompleted,
    create,
    setOrder as _setOrder
} from './todoSlice'

export const useTodos = () => {
    const dispatch = useDispatch()
    const allTodos = useSelector(state => state.todoReducer.todos)
    const order = useSelector(state => state.todoReducer.order)
    const filter = useSelector(state => state.todoReducer.filter)

    const deleteAllCompleted = useCallback(() => {
        dispatch(_deleteAllCompleted())
    }, [])

    const deleteTodo = useCallback((todoID) => {
        dispatch(deleteOne(todoID))
    }, [])

    const toggleTodoStatus = useCallback((todoID) => {
        dispatch(_toggleTodoStatus(todoID))
    }, [])

    const createTodo = useCallback((text, isCompleted) => {
        dispatch(create({ text, isCompleted }))
    }, [])

    const setOrder = useCallback((todos) => {
        dispatch(_setOrder(todos))
    }, [])

    return {
        allTodos,
        filter,
        order,
        deleteTodo,
        toggleTodoStatus,
        deleteAllCompleted,
        createTodo,
        setOrder
    }
}
