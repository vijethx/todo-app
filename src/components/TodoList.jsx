import { TodoCard } from "./TodoCard";

export function TodoList({ todos,selectedTab }) {
    // const tab = "All";
    const filterTodosList =
        selectedTab === "All"
            ? todos
            : selectedTab === "Completed"
            ? todos.filter((i) => i.complete)
            : todos.filter((i) => !i.complete);
    return (
        <>
            {filterTodosList.map((todo, todoIndex) => (
                <TodoCard key={todoIndex} todo={todo} />
            ))}
        </>
    );
}
