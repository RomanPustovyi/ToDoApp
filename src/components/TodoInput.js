import { useState } from 'react'
import './TodoInput.css'
import { Checkbox } from './Checkbox'
import { useTodos } from '../features/todo/useTodo'

export const TodoInput = () => {
    const { createTodo } = useTodos()
    const [value, setValue] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()

        if (value.length === 0) return

        createTodo(value, isCompleted)
        setValue('')
        setIsCompleted(false)
    }

    return (
        <div className='InputContainer'>
            <Checkbox
                checked={isCompleted}
                handleChange={() => setIsCompleted(!isCompleted)}
            />
            <form onSubmit={submitForm}>
                <input
                    className='Input'
                    type='text'
                    placeholder='Create a new todo...'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </div>
    )
}
