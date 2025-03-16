import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

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
    }
    function handleEditTodo() {}
    function handleDeleteTodo() {}

    const totalTasks = todos.length;
    let openTasksCount = todos.filter((i) => !i.complete).length;
    let completedTasksCount = todos.filter((i) => i.complete).length;

    // for (let i = 0; i < totalTasks; i++) {
    //   if (todos[i].complete == false) {
    //     openTasksCount++;
    //   }
    // }

    // completedTasksCount = totalTasks - openTasksCount;

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
                handleEditTodo={handleEditTodo}
                handleDeleteTodo={handleDeleteTodo}
            />
            <TodoInput handleAddTodo={handleAddTodo} />
            <Footer />
        </>
    );
}

export default App;
