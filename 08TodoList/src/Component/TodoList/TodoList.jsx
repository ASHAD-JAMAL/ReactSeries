import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([tasks, taskInput]);
      setTaskInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-800 p-4">
      <div className="mx-auto my-20 px-4 py-10 bg-white rounded-lg max-w-xl">
        <h2 className="text-blue-900 flex items-center mb-5">
          To-Do List
          <img
            src="./src/assets/list.png"
            alt="Image Description"
            className="w-9 ml-4 cursor-pointer"
          />
        </h2>
        <div className="flex items-center justify-between bg-gray-300 rounded-lg ">
          <input
            type="text"
            className="flex-1 border-none outline-none bg-transparent p-4"
            placeholder="Add Your Text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            onClick={addTask}
            className="border-none outline-none py-4 px-12 bg-red-500 text-white text-base cursor-pointer rounded-full"
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
