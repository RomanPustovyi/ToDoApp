import './TodoList.css'
import { TodoListItem } from './TodoListItem'
import { TodoFilters } from './TodoFilters'
import { useTodos } from '../features/todo/useTodo'

export const TodoList = () => {
    const { todosToDisplay, remainingTodos } = useTodos()

    return (
        <div className='ListContainer'>
            <ul>
                {todosToDisplay.map((todo, index) => (
                    <TodoListItem key={index} data={todo} />
                ))}
            </ul>
            <div className='ListFooter'>
                <p>{remainingTodos.length} items left</p>
                <TodoFilters />
                <button className="ClearCompletedTodosButton">Clear Completed</button>
            </div>
        </div>
    )
}
