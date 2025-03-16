import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { Footer } from "./components/Footer";

function App() {
  const todos = [
    { input: "Lorem ipsum dolor sit amet.", complete: true },
    { input: "Eaque tempore, voluptatibus.", complete: false },
    { input: "Amet consectetur adipisicing elit.", complete: false },
    { input: "Iusto est rerum nulla libero.", complete: true },
  ];

  const totalTasks = todos.length;
  let openTasksCount = 0;
  let completedTasksCount = 0;

  for (let i = 0; i < totalTasks; i++) {
    if (todos[i].complete == false) {
      openTasksCount++;
    }
  }

  completedTasksCount = totalTasks - openTasksCount;

  return (
    <>
      <Header openTasksCount={openTasksCount} />
      <Tabs
        totalTasks={totalTasks}
        openTasksCount={openTasksCount}
        completedTasksCount={completedTasksCount}
      />
      <TodoList todos={todos} />
      <TodoInput />
      <Footer />
    </>
  );
}

export default App;
