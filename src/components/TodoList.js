import './TodoList.css'
import { TodoListItem } from './TodoListItem'
import { TodoFilters } from './TodoFilters'
import { useTodos } from '../features/todo/useTodo'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useMemo } from 'react'

export const TodoList = () => {
    const { allTodos, order, filter, deleteAllCompleted, setOrder } = useTodos()

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result

        if (
            !destination &&
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) return

        const newOrder = [...order]
        newOrder.splice(source.index, 1)
        newOrder.splice(destination.index, 0, draggableId)
        setOrder(newOrder)
    }

    const remainingTodosCounter = useMemo(() => {
        return Object.values(allTodos).filter(todo => !todo.isCompleted).length
    }, [allTodos])

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
                            {
                                order.map((todoId, i) => {
                                    if (filter === 'All') return <TodoListItem key={i} data={allTodos[todoId]} index={i} />
                                    if (filter === 'Completed' && allTodos[todoId].isCompleted) return <TodoListItem key={i} data={allTodos[todoId]} index={i} />
                                    if (filter === 'Active' && !allTodos[todoId].isCompleted) return <TodoListItem key={i} data={allTodos[todoId]} index={i} />
                                    return null
                                })
                            }
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <div className='ListFooter'>
                <p>{remainingTodosCounter} items left</p>
                <TodoFilters />
                <button className="ClearCompletedTodosButton" onClick={deleteAllCompleted}>Clear Completed</button>
            </div>
        </div >
    )
}
