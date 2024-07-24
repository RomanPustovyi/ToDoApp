import { useSelector, useDispatch } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'
import { deleteOne } from './todoSlice'

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

    const deleteTodo = useCallback((todoID) => {
        console.log(todoID)
        dispatch(deleteOne(todoID))
    }, [])

    return { allTodos, remainingTodos, completedTodos, todosToDisplay, deleteTodo }
}
