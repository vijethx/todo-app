import { TodoCard } from "./TodoCard";

export function TodoList({
    todos,
    selectedTab,
    handleCompleteTodo,
    handleDeleteTodo,
}) {
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
                <TodoCard
                    key={todoIndex}
                    todoIndex={todos.findIndex(
                        (val) => val.input == todo.input
                    )} // look for index in the original todos array
                    todo={todo}
                    handleCompleteTodo={handleCompleteTodo}
                    handleDeleteTodo={handleDeleteTodo}
                />
            ))}
        </>
    );
}
