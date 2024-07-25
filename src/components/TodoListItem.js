import './TodoListItem.css'
import { ReactComponent as CrossIcon } from '../assets/images/icon-cross.svg'
import { Checkbox } from './Checkbox'
import { useTodos } from '../features/todo/useTodo'

export const TodoListItem = ({
    data
}) => {
    const { deleteTodo, toggleTodoStatus } = useTodos()

    const TextStyle = 'TodoText '.concat(data.isCompleted ? 'completed' : '')
    return (
        <li className='ListItem'>
            <Checkbox checked={data.isCompleted} handleChange={() => toggleTodoStatus(data.id)} />
            <div className='TodoTextWrapper'>
                <p className={TextStyle}>{data.data}</p>
            </div>

            <button className='DeleteButton' onClick={() => deleteTodo(data.id)}>
                <CrossIcon />
            </button>
        </li>
    )
}
