import { TodoCard } from "./TodoCard";

export function TodoList({ todos }) {
    const tab = "Open";
    const filterTodosList =
        tab === "All"
            ? todos
            : tab === "Completed"
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
