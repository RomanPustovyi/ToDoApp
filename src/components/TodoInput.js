import './TodoInput.css'
import { Checkbox } from './Checkbox'

export const TodoInput = () => {

    return (
        <div className='InputWrapper'>
            <Checkbox />
            <input className='Input' type='text' placeholder='Create a new todo...'></input>
        </div>
    )
}
