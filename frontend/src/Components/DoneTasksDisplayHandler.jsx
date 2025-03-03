import React from "react";
import axios from "axios"

function DoneTasksDisplayHandler({ doneTasks, setAllTasks }) {
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
        {Array.isArray(doneTasks) &&
          doneTasks.map((task) => (
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
                              <>
                                - <s className="text-gray-500">{list.task}</s>
                              </>
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

export default DoneTasksDisplayHandler;
