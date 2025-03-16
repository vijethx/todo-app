import { useState } from "react";

export function TodoInput({ handleAddTodo }) {
    const [inputValue, setInputValue] = useState("");
    return (
        <form
            className="input-container"
            onSubmit={(e) => {
                e.preventDefault();
                if (!inputValue) return; // to make sure there are no empty tasks
                handleAddTodo(inputValue);
                setInputValue("");
            }}
        >
            <input
                type="text"
                placeholder="Add task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                type="submit"
                // onClick={() => {
                //     if (!inputValue) return; // to make sure there are no empty tasks
                //     handleAddTodo(inputValue);
                // }}
            >
                ➕
            </button>
        </form>
    );
}
