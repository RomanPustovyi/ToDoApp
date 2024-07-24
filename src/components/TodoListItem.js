import './TodoListItem.css'
import { ReactComponent as CrossIcon } from '../assets/images/icon-cross.svg'
import { Checkbox } from './Checkbox'

export const TodoListItem = ({
    data
}) => {

    const handleDeleteItem = () => console.warn('Not implemented!')

    return (
        <li className='ListItem'>
            <Checkbox checked={data.isCompleted} />
            <div className='TodoTextWrapper'>
                <p className='TodoText'>{data.data}</p>
            </div>

            <button className='DeleteButton' onClick={handleDeleteItem}>
                <CrossIcon />
            </button>
        </li>
    )
}
