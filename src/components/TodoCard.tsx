import { Todo } from "./MainPage";

type TodoCardProps = {
    todo: Todo;
    index: number;
    handleTodoToggle: (index: number) => void;
    deleteTodo: (index: number) => void;
}

const TodoCard = ({ todo, index, handleTodoToggle, deleteTodo }: TodoCardProps) => {
    
    return (
        <div className={`${todo.isDone ? "complete": ""} todo-card`}>
            <div className="delete-card">
                <svg onClick={() => deleteTodo(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <h3>{todo.title}</h3>
            <p>{todo.todo}</p>
            <label>
                <input className="todo-checkbox" type="checkbox" checked={todo.isDone} onChange={() => handleTodoToggle(index)} />
                Done
            </label>
        </div>
    );
}

export default TodoCard;