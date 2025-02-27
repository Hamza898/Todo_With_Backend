import React from "react";

function DisplayTodoHandler({
  allTasks,
  setAllTasks,
  setDoneTasks,
  setForEditTask,
}) {
  const handleEdit = (index) => {
    setForEditTask({ index, ...allTasks[index] });
  };
  const onDoneHandle = (index) => {
    const newObj = allTasks[index];
    setDoneTasks((prev) => [...prev, newObj]);
    handleDelete(index);
  };
  const onCheckHandle = (index, taskIndex) => {
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
  const handleDelete = (index) => {
    const newObj = allTasks.filter((_, i) => i !== index);
    setAllTasks(newObj);
  };

  return (
    <div className="bg-gray-100 h-screen m-2 rounded-lg shadow-xl w-screen">
      <div className="grid grid-cols-4 gap-4 m-2">
        {allTasks &&
          allTasks.map((task, taskIndex) => (
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
                        onClick={() => onDoneHandle(taskIndex)}
                        className="bg-gray-700 text-gray-100 p-2 rounded-md cursor-pointer hover:bg-gray-900"
                      >
                        Done
                      </button>
                      <button
                        onClick={() => handleEdit(taskIndex)}
                        className="bg-gray-700 text-gray-100 p-2 rounded-md cursor-pointer hover:bg-gray-900"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(taskIndex)}
                        className="bg-gray-700 text-gray-100 p-2 rounded-md cursor-pointer hover:bg-gray-900"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                ) : (
                  <><ul className="list-disc ml-5">
                  {task.checkList &&
                    task.checkList.map((list, index) => (
                      <li key={index}>
                        {list.st ? (
                          <>
                            <input
                              type="checkbox"
                              onChange={() => onCheckHandle(index, taskIndex)}
                              className="mr-2 text-gray-500"
                            />
                            - <s className="text-gray-500">{list.task}</s>
                          </>
                        ) : (
                          <div className="text-gray-500">
                            <input
                              checked={controllCheck(taskIndex, index)}
                              type="checkbox"
                              onChange={() => onCheckHandle(index, taskIndex)}
                              className="mr-2 text-gray-500"
                            />
                            - {list.task}
                            
                          </div>
                          
                        )}
                      </li>
                      
                    ))}
                </ul>
              <button
              onClick={() => handleDelete(taskIndex)}
              className="bg-gray-700 text-gray-100 p-2 rounded-md cursor-pointer text-center absolute bottom-2 flex justify-between px-2 ml-2 hover:bg-gray-900"
            >
              Delete
            </button></>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DisplayTodoHandler;
