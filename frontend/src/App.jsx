import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import CreateNew from "./Components/CreateNew";
import DisplayTodoHandler from "./Components/DisplayTodoHandler";
import DoneTasksDisplayHandler from "./Components/DoneTasksDisplayHandler";
import EditHandler from "./Components/EditHandler";

function App() {
  // const dataFromLocalSt = JSON.parse(localStorage.getItem("items")) || [];
  // const doneDataFromLocalSt =
  //   JSON.parse(localStorage.getItem("doneItems")) || [];
  const [allTasks, setAllTasks] = useState([]);
  const [isCreateNewActive, setIsCreateNewActive] = useState(false);
  const [doneTasks, setDoneTasks] = useState('');
  const [isDoneTaskActive, setIsDoneTaskActive] = useState(false);
  const [forEditTask, setForEditTask] = useState();

const fetchAllTasks= async ()=>{
  try {
    const response= await axios.get('http://localhost:3000/tasks')
    setAllTasks(response.data)
    // setDoneTasks(response.data.filter(task=> task.isCompleted === true))
  } catch (error) {
    console.log("Error fetching Tasks" , error)
  }
}
// const fetchAllDoneTasks= async ()=>{
//   try {
//     const response= await axios.get('http://localhost:3000/doneTasks')
//     setDoneTasks(response.data.filter(task=> task.isCompleted !== false))
//   } catch (error) {
//   }
// }

useEffect(()=>{
  fetchAllTasks()
  // fetchAllDoneTasks()
},[])

  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(allTasks));
  //   localStorage.setItem("doneItems", JSON.stringify(doneTasks));
  // }, [allTasks, doneTasks]);

  const completedTasks = allTasks.filter(task => task.isCompleted);
  const notCompletedTasks = allTasks.filter(task => !task.isCompleted);

  return (
    <>
      <Navbar
        setIsCreateNewActive={setIsCreateNewActive}
        isCreateNewActive={isCreateNewActive}
        setAllTasks={setAllTasks}
        alltasks={allTasks}
      />
      <div className="flex flex-row">
        <SideBar
          isDoneTaskActive={isDoneTaskActive}
          setIsDoneTaskActive={setIsDoneTaskActive}
        />
        {!isCreateNewActive && !isDoneTaskActive && !forEditTask && (
          <DisplayTodoHandler
            allTasks={notCompletedTasks}
            setAllTasks={setAllTasks}
            setDoneTasks={setDoneTasks}
            setForEditTask={setForEditTask}
          />
        )}
        {!!forEditTask && (
          <EditHandler
            forEditTask={forEditTask}
            setForEditTask={setForEditTask}
            allTasks={allTasks}
            setAllTasks={setAllTasks}
          />
        )}
        {!isCreateNewActive && isDoneTaskActive && (
          <DoneTasksDisplayHandler
            doneTasks={completedTasks}
            setAllTasks={setAllTasks}
          />
        )}
        {isCreateNewActive && (
          <CreateNew
            allTasks={allTasks}
            setAllTasks={setAllTasks}
            setIsCreateNewActive={setIsCreateNewActive}
          />
        )}
      </div>
    </>
  );
}

export default App;
