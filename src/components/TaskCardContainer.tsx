import { Todo } from "./MainPage";
import TodoCard from "./TodoCard";

type TaskCardContainerProps = {
    deleteTodo: (index: number) => void;
    todoList: Todo[];
    showNewTodo: () => void;
    handleTodoToggle: (index: number) => void;
}


const TaskCardContainer = ({ todoList, deleteTodo, showNewTodo, handleTodoToggle }: TaskCardContainerProps) => {

    return (
        <section className="task-card-container">
        {showNewTodo &&
            <div className="add-todo-btn" onClick={showNewTodo}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-1 h-1">
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
                <span>Add new</span>
            </div>
        }
        {todoList?.map((todo, index) => (
            <TodoCard key={index} todo={todo} deleteTodo={deleteTodo} index={index} handleTodoToggle={handleTodoToggle} />
        ))}
        </section>
    );
}

export default TaskCardContainer;