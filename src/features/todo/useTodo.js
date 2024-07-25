import { useSelector, useDispatch } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'
import {
    deleteOne,
    toggleTodoStatus as _toggleTodoStatus,
    deleteAllCompleted as _deleteAllCompleted,
    create
} from './todoSlice'

export const useTodos = () => {
    const dispatch = useDispatch()
    const allTodos = useSelector(state => state.todoReducer.todos)
    const filter = useSelector(state => state.todoReducer.filter)
    const [remainingTodos, setRemainingTodos] = useState([])
    const [completedTodos, setCompletedTodos] = useState([])
    const [todosToDisplay, setTodosToDisplay] = useState([])

    useEffect(() => {
        const _remainingTodos = []
        const _completedTodos = []

        allTodos.forEach(todo => {
            if (todo.isCompleted) {
                _completedTodos.push(todo)
            } else {
                _remainingTodos.push(todo)
            }
        })

        setRemainingTodos(_remainingTodos)
        setCompletedTodos(_completedTodos)

        if (filter === 'Completed') {
            setTodosToDisplay(_completedTodos)
        } else if (filter === 'Active') {
            setTodosToDisplay(_remainingTodos)
        } else {
            setTodosToDisplay(allTodos)
        }

    }, [allTodos, filter])

    const deleteAllCompleted = useCallback(() => {
        dispatch(_deleteAllCompleted())
    }, [])

    const deleteTodo = useCallback((todoID) => {
        console.log(todoID)
        dispatch(deleteOne(todoID))
    }, [])

    const toggleTodoStatus = useCallback((todoID) => {
        dispatch(_toggleTodoStatus(todoID))
    }, [])

    const createTodo = useCallback((text, isCompleted) => {
        dispatch(create({ text, isCompleted }))
    }, [])

    return {
        allTodos,
        remainingTodos,
        completedTodos,
        todosToDisplay,
        deleteTodo,
        toggleTodoStatus,
        deleteAllCompleted,
        createTodo
    }
}
