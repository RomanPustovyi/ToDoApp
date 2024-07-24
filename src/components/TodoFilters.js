import './TodoFilters.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../features/todo/todoSlice'

export const TodoFilters = () => {
    const dispatch = useDispatch()
    const selectedFilter = useSelector((state) => state.todoReducer.filter)

    const handleOptionChange = (event) => {
        dispatch(setFilter(event.target.value))
    }

    return (
        <div className='Filters'>
            <div className="FilterOption">
                <input
                    type="radio"
                    id="All"
                    name="todosFilter"
                    value="All"
                    checked={selectedFilter === 'All'}
                    onChange={handleOptionChange}
                />
                <label htmlFor="All">All</label>
            </div>
            <div className="FilterOption">
                <input
                    type="radio"
                    id="Active"
                    name="todosFilter"
                    value="Active"
                    checked={selectedFilter === 'Active'}
                    onChange={handleOptionChange}
                />
                <label htmlFor="Active">Active</label>
            </div>
            <div className="FilterOption">
                <input
                    type="radio"
                    id="Completed"
                    name="todosFilter"
                    value="Completed"
                    checked={selectedFilter === 'Completed'}
                    onChange={handleOptionChange}
                />
                <label htmlFor="Completed">Completed</label>
            </div>
        </div>
    )
}
