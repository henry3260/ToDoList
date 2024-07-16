import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInpurChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInpurChange} />
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="up-button"
                            onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button className="Down-button"
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>)}
            </ol>
        </div>)
}

export default ToDoList