import { TodoCard } from "./TodoCard";

export function TodoList({ todos }) {
  return (
    <div className="">
      {todos.map((todo, todoIndex) => (
        <TodoCard key={todoIndex} todo={todo} />
      ))}
    </div>
  );
}
