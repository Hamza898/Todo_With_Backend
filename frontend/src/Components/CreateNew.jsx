import React, { useState } from "react";
import CreateNewDescription from "./CreateNewDescription";
import CreateNewChecklist from "./CreateNewChecklist";

function CreateNew({ allTasks, setAllTasks, setIsCreateNewActive }) {
  const [currentTask, setCurrentTask] = useState();
  const [taskType, setTaskType] = useState("description");
  const handleOnTitleChange = (e) => {
    setCurrentTask((prev) => ({ ...prev, title: e.target.value }));
  };

  return (
    <div>
      {" "}
      <div className="bg-gray-100 h-screen m-2 rounded-lg shadow-xl md:w-2xl lg:w-7xl">
        <div className="m-2 sm:text-1xl text-2xl text-gray-700 font-bold flex flex-row">
          Your Title
          <select
            onChange={(e) => setTaskType(e.target.value)}
            className="lg:ml-100 sm:ml-50  bg-gray-800 text-white rounded-md mt-1 p-1 text-sm"
          >
            <option value="description">Description Style</option>
            <option value="todo">ToDo Style</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Enter your Title here..."
          value={currentTask?.title}
          onChange={handleOnTitleChange}
          className="ml-2 p-2 rounded-md border border-gray-600 w-3/4"
        />
        {taskType === "description" && (
          <CreateNewDescription
            setCurrentTask={setCurrentTask}
            currentTask={currentTask}
            setAllTasks={setAllTasks}
            taskType={taskType}
            setIsCreateNewActive={setIsCreateNewActive}
          />
        )}
        {taskType === "todo" && (
          <CreateNewChecklist
            allTasks={allTasks}
            taskType={taskType}
            title={currentTask?.title}
            setAllTasks={setAllTasks}
            setIsCreateNewActive={setIsCreateNewActive}
          />
        )}
      </div>
    </div>
  );
}

export default CreateNew;
