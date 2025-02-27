import React from "react";

function SideBar({isDoneTaskActive , setIsDoneTaskActive}) {
  return (
    <div className="h-screen lg:w-52 md:w-52 m-2 bg-gray-100 rounded-lg shadow-lg text-center text-xl text-gray-700 sm:w-24">
      <ul>
        <li onClick={()=>setIsDoneTaskActive(false)} className={`pt-2 pb-2 m-2 bg-gray-100 border border-gray-100 hover:border-gray-700 rounded-md ${!isDoneTaskActive? "shadow-md":""} cursor-pointer`}>ToDo Tasks</li>
        <li onClick={()=>setIsDoneTaskActive(true)} className={`pt-2 pb-2 m-2 bg-gray-100 border border-gray-100 hover:border-gray-700 rounded-md ${isDoneTaskActive? "shadow-md":""} cursor-pointer`}>Done Tasks</li>
      </ul>
    </div>
  );
}

export default SideBar;
