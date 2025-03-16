export function Header({ openTasksCount }) {
  const taskOrTasks = openTasksCount != 1 ? "tasks" : "task";

  return (
    <header className="">
      <h1 className="text-gradient">
        You have {openTasksCount} open {taskOrTasks}
      </h1>
    </header>
  );
}
