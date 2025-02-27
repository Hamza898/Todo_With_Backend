import React from "react";

function DoneTasksDisplayHandler({ doneTasks, setDoneTasks }) {
  const handleDelete = (index) => {
    const newObj = doneTasks.filter((_, i) => i !== index);
    setDoneTasks(newObj);
  };

  return (
    <div className="bg-gray-100 h-screen m-2 rounded-lg shadow-xl w-screen">
      <div className="grid grid-cols-4 gap-4 m-2">
        {doneTasks &&
          doneTasks.map((task, taskIndex) => (
            <div
              key={taskIndex}
              className="h-64 w-56 bg-gray-200 shadow-lg rounded-lg"
            >
              <div className="h-64 w-56 bg-gray-200 shadow-lg rounded-lg  relative">
                <div className="text-gray-700 font-bold text-2xl m-2">
                  Title:
                </div>
                <div className="text-gray-500 m-2">{task.title}</div>

                {task.taskType == "description" ? (
                  <>
                    <div className="text-gray-700 font-bold text-2xl m-2">
                      Description:
                    </div>
                    <div className="text-gray-500 m-2">{task.description}</div>

                    <div className="absolute bottom-2 left-0 right-0 flex justify-between px-2">
                      <button
                        onClick={() => handleDelete(taskIndex)}
                        className="bg-gray-700 text-gray-100 p-2 rounded-md cursor-pointer hover:bg-gray-900"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <ul className="list-disc ml-5">
                      {task.checkList &&
                        task.checkList.map((list, index) => (
                          <li key={index}>
                            - <s>{list.task}</s>
                          </li>
                        ))}
                    </ul>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-between px-2">
                      <button
                        className="bg-gray-700 text-gray-100 p-2 rounded-md cursor-pointer hover:bg-gray-900"
                        onClick={() => handleDelete(taskIndex)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
                {/* {task.taskType == "todo"  &&  } */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DoneTasksDisplayHandler;
