import './Todo.css'
import { ColorThemeButton } from './ColorThemeButton'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

export const Todo = () => {
    return (
        <div className='TodoContainer'>
            <div className='Header'>
                <h1 className='Title'>Todo</h1>
                <ColorThemeButton />
            </div>

            <TodoInput />

            <TodoList />
        </div>
    )
}
