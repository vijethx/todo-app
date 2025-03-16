export function Tabs({
    totalTasks,
    openTasksCount,
    completedTasksCount,
    selectedTab,
    setSelectedTab,
}) {
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
                    <button
                        key={tabIndex}
                        className={
                            "tab-button " +
                            (tab === selectedTab ? "tab-selected" : "")
                        }
                        onClick={() => setSelectedTab(tab)}
                    >
                        <h4>
                            {tab} <span> {numOfTasks} </span>
                        </h4>
                    </button>
                );
            })}
            <hr />
        </nav>
    );
}
