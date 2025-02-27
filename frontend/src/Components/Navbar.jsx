import React, { useState } from "react";

function Navbar({
  setIsCreateNewActive,
  isCreateNewActive,
}) {
  const [taskType,setTaskType]=useState('description')
  const handleOnCreateNew = () => {
    setIsCreateNewActive(true)
  };
  const handleOnHome = () => {
    setIsCreateNewActive(false)
  };
  const onChangeSelect=()=>
  {
    setTaskType(e.target.value)
    if(alltasks)
    {
      setAllTasks((prev)=>[...prev,{taskType}])
    }
    else{
      setAllTasks([{taskType}])
    }
  }
  return (
    <div className="flex flex-row bg-gray-100 shadow-lg rounded-lg m-2 w-screen h-10/12">
      <div className="text-gray-700 p-4 mt-2 m-2 text-5xl font-extrabold">
        ToDo
      </div>
      <ul className="flex flex-row text-gray-500 p-4 m-2 mt-5 text-xl">
        <li
          onClick={handleOnHome}
          className={`ml-6 cursor-pointer bg-gray-100 pr-2 pl-2 p-1 rounded-sm border border-gray-100 hover:border-gray-700 ${
            !isCreateNewActive ? "shadow-lg" : ""
          }`}
        >
          Home
        </li>
        <li
          onClick={handleOnCreateNew}
          className={`ml-6 cursor-pointer bg-gray-100 pr-2 pl-2 p-1 rounded-sm border border-gray-100 hover:border-gray-700 ${
            isCreateNewActive ? "shadow-lg" : ""
          }`}
        >
          Create New
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
