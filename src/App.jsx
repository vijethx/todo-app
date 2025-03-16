import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
    // const todos = [
    //   { input: "Lorem ipsum dolor sit amet.", complete: true },
    //   { input: "Eaque tempore, voluptatibus.", complete: false },
    //   { input: "Amet consectetur adipisicing elit.", complete: false },
    //   { input: "Iusto est rerum nulla libero.", complete: true },
    // ];

    const [todos, setTodos] = useState([
        { input: "Add your first task.", complete: false },
    ]);

    const [selectedTab, setSelectedTab] = useState("All");

    function handleAddTodo(newTodo) {
        const newTodoList = [...todos, { input: newTodo, complete: false }];
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    }
    function handleCompleteTodo(index) {
        // onclicking the Done button
        let newTodoList = [...todos]; // created a duplicate list of todos
        let completedTodo = todos[index]; // accessing the completed task

        completedTodo["complete"] = true; // set the completed status to true
        newTodoList[index] = completedTodo; // rewrite the task w/ the new status in the list of todos

        setTodos(newTodoList); // set todos
        handleSaveData(newTodoList);
        alert("Task completed");
    }

    function handleDeleteTodo(index) {
        let newTodoList = todos.filter((val, valIndex) => {
            return valIndex !== index;
        });
        setTodos(newTodoList);
        handleSaveData(newTodoList);
        alert("Task deleted successfully");
    }

    const totalTasks = todos.length;
    let openTasksCount = todos.filter((i) => !i.complete).length;
    let completedTasksCount = todos.filter((i) => i.complete).length;

    function handleSaveData(currTodos) {
        localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
    }

    // completedTasksCount = totalTasks - openTasksCount;
    useEffect(() => {
        if (!localStorage || !localStorage.getItem("todo-app")) return;
        let db = JSON.parse(localStorage.getItem("todo-app"));
        setTodos(db.todos);
    }, []);
    return (
        <>
            <Header openTasksCount={openTasksCount} />
            <Tabs
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                totalTasks={totalTasks}
                openTasksCount={openTasksCount}
                completedTasksCount={completedTasksCount}
            />
            <TodoList
                todos={todos}
                selectedTab={selectedTab}
                handleCompleteTodo={handleCompleteTodo}
                handleDeleteTodo={handleDeleteTodo}
            />
            <TodoInput handleAddTodo={handleAddTodo} />
            <Footer />
        </>
    );
}

export default App;
