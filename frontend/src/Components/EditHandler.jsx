import React, { useState } from "react";

function EditHandler({ forEditTask, setForEditTask, setAllTasks,allTasks }) {
  const[title,setTitle]=useState(forEditTask.title)
  const[description,setDescription]=useState(forEditTask.description)
  const handleUpdateTask=()=>{
    const arr=allTasks
    arr[forEditTask.index].title=title
    arr[forEditTask.index].description=description
    setAllTasks(arr)
    setForEditTask(null)
  }
  return (
    <div className="bg-gray-100 h-screen m-2 rounded-lg shadow-xl w-screen">
      <div className="m-4 text-2xl text-gray-700 font-bold">Your Title</div>
      <input
        type="text"
        placeholder="Enter your Title here..."
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="ml-2 p-2 rounded-md border border-gray-600 w-3/4"
      />
      <div className="m-4 text-2xl text-gray-700 font-bold">
        Your Description
      </div>
      <textarea
        placeholder="Enter your Description here..."
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        className="border border-gray-600 w-7/8 h-1/4 p-2 ml-2 rounded-lg"
      ></textarea>
      <div>
        <button
          onClick={handleUpdateTask}
          className="bg-gray-700 text-gray-100 p-2 m-2 rounded-md cursor-pointer hover:bg-gray-900"
        >
          Update Task
        </button>
        <button
          onClick={() => setForEditTask(null)}
          className="bg-gray-700 text-gray-100 p-2 m-2 rounded-md cursor-pointer hover:bg-gray-900"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default EditHandler;
