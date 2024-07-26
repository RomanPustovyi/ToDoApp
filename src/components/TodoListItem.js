import './TodoListItem.css'
import { ReactComponent as CrossIcon } from '../assets/images/icon-cross.svg'
import { Checkbox } from './Checkbox'
import { useTodos } from '../features/todo/useTodo'
import { Draggable } from 'react-beautiful-dnd'

export const TodoListItem = ({
    data,
    index
}) => {
    const { deleteTodo, toggleTodoStatus } = useTodos()

    const TextStyle = 'TodoText '.concat(data.isCompleted ? 'completed' : '')
    return (
        <Draggable key={data.id} draggableId={data.id} index={index}>
            {provided => (
                <li className='ListItem'
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <Checkbox checked={data.isCompleted} handleChange={() => toggleTodoStatus(data.id)} />
                    <div className='TodoTextWrapper'>
                        <p className={TextStyle}>{data.text}</p>
                    </div>

                    <button className='DeleteButton' onClick={() => deleteTodo(data.id)}>
                        <CrossIcon />
                    </button>
                </li>
            )}
        </Draggable>
    )
}
