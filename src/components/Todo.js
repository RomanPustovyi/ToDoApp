import './Todo.css'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

export const Todo = () => {
    return (
        <div className='Container'>
            <div className='Header'>
                <h1 className='Title'>Todo</h1>
            </div>

            <TodoInput />

            <TodoList />
        </div>
    )
}
