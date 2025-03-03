import axios from "axios";
import React from "react";

function DisplayTodoHandler({
  allTasks,
  setAllTasks,
  setDoneTasks,
  setForEditTask,
}) {
  const handleEdit = (taskId) => {
    setForEditTask({ taskId, ...allTasks.find(task=> task._id == taskId) });
  };

  const onDoneHandle = async (taskId) => {
    try {
      console.log("reached", taskId);
      await axios.post(`http://localhost:3000/tasks/updateStatus/${taskId}`);
      setAllTasks((prev) =>
        prev.map((task) =>
          task._id === taskId ? { ...task, isCompleted: true } : task
        )
      );
    } catch (error) {
      console.log("Cannot update the status", error);
    }
  };

  const onCheckHandle = (index, taskIndex) => {
    console.log("checked")
    const array = [...allTasks];
    const bools = [];
    array[taskIndex].checkList[index].ischecked =
      !array[taskIndex].checkList[index].ischecked;
    setAllTasks(array);
    const checkLIst = allTasks[taskIndex].checkList;
    for (let i = 0; i < checkLIst.length; i++) {
      bools.push(checkLIst[i].ischecked);
    }
    const check = bools.find((bools) => bools === false);
    if (check === undefined) {
      array[taskIndex].status = true;
      console.log("Done");
      setAllTasks(array);
    }
    if (allTasks[taskIndex].status === true) {
      const task = allTasks[taskIndex];
      setDoneTasks((prev) => [...prev, task]);
      const newData = allTasks.filter((task, i) => task.status !== true);
      setAllTasks(newData);
    }
  };
  const controllCheck = (taskIndex, index) => {
    if (
      allTasks[taskIndex] &&
      allTasks[taskIndex].checkList &&
      allTasks[taskIndex].checkList[index]
    ) {
      return allTasks[taskIndex].checkList[index].ischecked;
    }
    return false;
  };
  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/delete/${taskId}`);
      setAllTasks((prev) => prev.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="bg-gray-100 h-screen m-2 rounded-lg shadow-xl w-screen">
      <div className="grid grid-cols-4 gap-4 m-2">
        {Array.isArray(allTasks) &&
          allTasks.map((task) => (
            <div
              key={task._id}
              className="h-64 w-56 bg-gray-200 shadow-lg rounded-lg"
            >
              <div className="h-64 w-56 bg-gray-200 shadow-lg rounded-lg  relative">
                <div className="text-gray-700 font-bold text-2xl m-2">
                  Title:
                </div>
                <div className="text-gray-500 m-2">{task.title}</div>

                {task.type == "description" ? (
                  <>
                    <div className="text-gray-700 font-bold text-2xl m-2">
                      Description:
                    </div>
                    <div className="text-gray-500 m-2">{task.description}</div>

                    <div className="absolute bottom-2 left-0 right-0 flex justify-between px-2">
                      <button
                        onClick={() => onDoneHandle(task._id)}
                        className="bg-gray-700 text-gray-100 p-2 rounded-md cursor-pointer hover:bg-gray-900"
                      >
                        Done
                      </button>
                      <button
                        onClick={() => handleEdit(task._id)}
                        className="bg-gray-700 text-gray-100 p-2 rounded-md cursor-pointer hover:bg-gray-900"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="bg-gray-700 text-gray-100 p-2 rounded-md cursor-pointer hover:bg-gray-900"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <ul className="list-disc ml-5">
                      {task.checklist &&
                        task.checklist.map((list) => (
                          <li key={list._id}>
                            {list.isChecked ? (
                              <>
                                <input
                                  type="checkbox"
                                  onChange={() =>
                                    onCheckHandle(index, taskIndex)
                                  }
                                  className="mr-2 text-gray-500"
                                />
                                - <s className="text-gray-500">{list.task}</s>
                              </>
                            ) : (
                              <div className="text-gray-500">
                                <input
                                  checked={controllCheck(task._id, list._id)}
                                  type="checkbox"
                                  onChange={() =>
                                    onCheckHandle(task._id, list._id)
                                  }
                                  className="mr-2 text-gray-500"
                                />
                                - {list.task}
                              </div>
                            )}
                          </li>
                        ))}
                    </ul>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-gray-700 text-gray-100 p-2 rounded-md cursor-pointer text-center absolute bottom-2 flex justify-between px-2 ml-2 hover:bg-gray-900"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DisplayTodoHandler;
