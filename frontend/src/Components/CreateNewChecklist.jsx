import React, { useState } from "react";

function CreateNewChecklist({
  allTasks,
  setAllTasks,
  taskType,
  setIsCreateNewActive,
  title
}) {
  const [task, setTask] = useState("");
  const [checkList, setCheckList] = useState([]);
  const [isEditActive, setIsEditActive] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [editTask, setEditTask] = useState();
  const handleAddTask = () => {
    setCheckList((prev) => [...prev, { ischecked: false, task: task }]);
    setTask("");
  };
  const handleAddCheckList = () => {
    if (title.trim() && checkList[0].task) {
      setAllTasks((prev) => [
        ...prev,
        { status: false, taskType, title, checkList },
      ]);
      setIsCreateNewActive(false);
      console.log(allTasks);
    } else alert("Title and Atleast one task is must");
  };
  const handleEdit = (index) => {
    setEditTask(checkList[index].task);
    setIsEditActive(true);
    setEditIndex(index);
  };
  const handleAdd = (index) => {
    const arr = checkList;
    arr[index].task = editTask;
    setCheckList(arr);
    setIsEditActive(false);
    setTask("");
  };
  return (
    <div className="bg-gray-100 h-screen m-2 rounded-lg shadow-xl">
      <div className="m-4 text-2xl text-gray-700 font-bold">Your Task</div>
      <div>
        <input
          type="text"
          placeholder="Enter your Task here..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="ml-2 p-2 rounded-md border border-gray-600 w-1/2"
        />
        <button
          onClick={handleAddTask}
          className="bg-gray-700 text-gray-100 p-2 m-2 rounded-md cursor-pointer hover:bg-gray-900"
        >
          Add Task
        </button>
      </div>
      <div className="m-2 h-1/2">
        {checkList.map((task, index) => (
          <div className="flex justify-between" key={index}>
            {isEditActive && editIndex === index ? (
              <>
                <input
                  className="w-1/2 h-10 p-4 border border-gray-500 rounded-lg"
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                ></input>
                <button
                  onClick={() => handleAdd(index)}
                  className="bg-gray-700 text-gray-100 p-2 m-2 rounded-md cursor-pointer hover:bg-gray-900"
                >
                  Add
                </button>
              </>
            ) : (
              <>
                <div className="text-gray-700">- {task.task}</div>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-gray-700 text-gray-100 p-2 m-2 rounded-md cursor-pointer hover:bg-gray-900"
                >
                  Edit
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={handleAddCheckList}
          className="bg-gray-700 text-gray-100 p-2 m-2 rounded-md cursor-pointer hover:bg-gray-900"
        >
          Add CheckList
        </button>
        <button
          onClick={() => setIsCreateNewActive(false)}
          className="bg-gray-700 text-gray-100 p-2 m-2 rounded-md cursor-pointer hover:bg-gray-900"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CreateNewChecklist;
