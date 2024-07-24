import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const useTodos = () => {
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

    return { allTodos, remainingTodos, completedTodos, todosToDisplay }
}
