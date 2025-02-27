import React from 'react'

function CreateNewDescription({allTasks,setIsCreateNewActive ,currentTask,setCurrentTask,setAllTasks,taskType}) {
    const handleOnDescriptionChange = (e) => {
        setCurrentTask((prev) => ({ ...prev, description: e.target.value }));
      };
    const handleAddTask = () => {
        if (currentTask.title && currentTask.description) {
          setAllTasks((prev) => [
            ...prev,
            { status: false, taskType, ...currentTask },
          ]);
          setCurrentTask({ title: "", description: "" });
          setIsCreateNewActive(false);
        }
        else {
          alert("Title and Description cannot be empty!");
        }
        console.log(allTasks);
      };
  return (
 <div>
    <div>
    <div className="m-4 text-2xl text-gray-700 font-bold">
      Your Description
    </div>
    <textarea
      placeholder="Enter your Description here..."
      value={currentTask?.description}
      onChange={handleOnDescriptionChange}
      className="border border-gray-600 w-7/8 h-1/4 p-2 ml-2 rounded-lg"
    ></textarea>
    <div>
      <button
        onClick={handleAddTask}
        className="bg-gray-700 text-gray-100 p-2 m-2 rounded-md cursor-pointer hover:bg-gray-900"
      >
        Add Task
      </button>
      <button
        onClick={() => setIsCreateNewActive(false)}
        className="bg-gray-700 text-gray-100 p-2 m-2 rounded-md cursor-pointer hover:bg-gray-900"
      >
        Close
      </button>
    </div>
  </div>
  </div>
);

}

export default CreateNewDescription