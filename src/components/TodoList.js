import './TodoList.css'
import { TodoListItem } from './TodoListItem'
import { TodoFilters } from './TodoFilters'
import { useTodos } from '../features/todo/useTodo'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export const TodoList = () => {
    const { allTodos, todosToDisplay, remainingTodos, deleteAllCompleted, setTodos } = useTodos()

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result

        if (
            !destination &&
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) return

        const items = [...allTodos]
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        console.log(items)
        setTodos(items)
    }

    return (
        <div className='ListContainer'>
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <Droppable
                    droppableId={'list'}
                >
                    {(provided) => (
                        <ul ref={provided.innerRef} {...provided.droppableProps}>
                            {todosToDisplay.map((todo, i) => (
                                <TodoListItem key={i} data={todo} index={i} />
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <div className='ListFooter'>
                <p>{remainingTodos.length} items left</p>
                <TodoFilters />
                <button className="ClearCompletedTodosButton" onClick={deleteAllCompleted}>Clear Completed</button>
            </div>
        </div >
    )
}
