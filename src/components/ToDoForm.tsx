import { useRef, useState } from "react";
import { Todo } from "./MainPage";

type TodoFormProps = {
    todoList: Todo[] | undefined,
    addTodo: (todo: Todo) => void;
    hideNewTodo: () => void;
}

const ToDoForm = ({ todoList, addTodo, hideNewTodo }: TodoFormProps) => {
    const [isEmptyInput, setIsEmptyInput] = useState(false);
    const titleRef = useRef<HTMLParagraphElement>();
    const todoInputRef = useRef<HTMLTextAreaElement>(null);

    const handleInsertNewTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let defaultTitle = "";
        let newTodo: Todo = {isDone: false, todo: "", title: ""};

        if(!todoInputRef.current?.value) {
            setIsEmptyInput(true);
            setTimeout(() => {
                setIsEmptyInput(false);
            }, 1500);
            return;
        }

        if(titleRef.current?.textContent === "") {
            defaultTitle = `Todo ${(todoList as Todo[]).length + 1}`;
            newTodo = { isDone: false, todo: todoInputRef.current.value, title: defaultTitle };            
        } else {
            newTodo = { isDone: false, todo: todoInputRef.current.value, title: titleRef.current?.textContent ?? undefined };
        }

        addTodo(newTodo);
        hideNewTodo();
    }

    return (
        <form className="todo-form">
            <div className="close">
                <svg onClick={hideNewTodo} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <h2 className="form-title">New</h2>
            <div className="input-title">
                <label htmlFor="title">Title: </label>  
                <p id="title" ref={titleRef as React.RefObject<HTMLParagraphElement>} contentEditable></p>              
            </div>
            <div className="input-todo">
                <textarea ref={todoInputRef} className={isEmptyInput? "error-warning": ""}></textarea> 
                {isEmptyInput && <p className="error">Input To do!</p> }
                <button onClick={handleInsertNewTodo}>
                    Add
                </button>
            </div>
        </form>
    );
}

export default ToDoForm;