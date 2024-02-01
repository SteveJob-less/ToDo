import { useEffect, useState } from "react";
import TaskCardContainer from "./TaskCardContainer";
import ToDoForm from "./ToDoForm";

export type Todo = {
    isDone: boolean,
    todo: string,
    title: string | undefined,
}


const MainPage = () => {

    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [addNew, setAddNew] = useState(false);

    const handleShowHideAddTodo = () => {
        setAddNew((prev) => prev = !prev);
    }

    const addTodo = (newTodo: Todo) => {
        // setTodoList to update change in the component
        setTodoList((prevTodo) => [...prevTodo, newTodo]);

        // create new todoList by inserting newTodo to the current todoList state
        const newTodoList = [...todoList, newTodo];
        
        // then store the new and updated todoList to localStorage
        localStorage.setItem("todos", JSON.stringify(newTodoList));
    };
    
    const deleteTodo = (index: number) => {
        // filter out the todo that match the index from todoList and setTodoList to update change in the component
        setTodoList((prevTodoList) => prevTodoList.filter((_, i) => i !== index));

        // create new todoList by filtering out the matched index from todoList state
        const newTodoList = todoList.filter((_, i) => i !== index);

        // then store the updated todoList to localStorage
        localStorage.setItem("todos", JSON.stringify(newTodoList));
    };
    
    const handleTodoToggle = (index: number) => {
        // toggle todo.isDone from todoList that match the index, then the change state triggers rerender
        setTodoList((prevTodoList) => 
            prevTodoList.map((todo, i) =>
            i === index ? { ...todo, isDone: !todo.isDone } : todo
        ));

        // create updated todoList variable by mapping todoList and update todo.isDone
        const newTodoList = todoList.map((todo, i) =>
            i === index ? { ...todo, isDone: !todo.isDone } : todo
        );

        // store the updated todoList variable to localStorage
        localStorage.setItem("todos", JSON.stringify(newTodoList));
    };
    useEffect(() => {
        // check todos stored in localStorage
        const localStored = localStorage.getItem("todos");
        
        // if true set the stored todos to todoList
        if(localStored) {
            const todos = JSON.parse(localStored);
            setTodoList(todos);
        }
        
    }, [addNew]);

    return (
        <main>
            {addNew ? (
                <ToDoForm 
                    todoList={todoList} 
                    addTodo={addTodo} 
                    hideNewTodo={handleShowHideAddTodo} 
                />
            ) : (
                <>
                    <h1>Todo List</h1>
                    <TaskCardContainer 
                        todoList={todoList} 
                        deleteTodo={deleteTodo} 
                        handleTodoToggle={handleTodoToggle} 
                        showNewTodo={handleShowHideAddTodo} 
                    />
                </>
            )}
        </main>
    );
}

export default MainPage;