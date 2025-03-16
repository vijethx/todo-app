export function Tabs({ totalTasks, openTasksCount, completedTasksCount }) {
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? totalTasks
            : tab === "Open"
            ? openTasksCount
            : completedTasksCount;
        return (
          <button key={tabIndex} className="tab-button">
            <h4>
              {tab} <span> {numOfTasks} </span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
