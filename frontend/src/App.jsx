import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import CreateNew from "./Components/CreateNew";
import DisplayTodoHandler from "./Components/DisplayTodoHandler";
import DoneTasksDisplayHandler from "./Components/DoneTasksDisplayHandler";
import EditHandler from "./Components/EditHandler";

function App() {
  const dataFromLocalSt = JSON.parse(localStorage.getItem("items")) || [];
  const doneDataFromLocalSt =
    JSON.parse(localStorage.getItem("doneItems")) || [];
  const [allTasks, setAllTasks] = useState(dataFromLocalSt);
  const [isCreateNewActive, setIsCreateNewActive] = useState(false);
  const [doneTasks, setDoneTasks] = useState(doneDataFromLocalSt);
  const [isDoneTaskActive, setIsDoneTaskActive] = useState(false);
  const [forEditTask, setForEditTask] = useState();
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(allTasks));
    localStorage.setItem("doneItems", JSON.stringify(doneTasks));
  }, [allTasks, doneTasks]);

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
            allTasks={allTasks}
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
            doneTasks={doneTasks}
            setDoneTasks={setDoneTasks}
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
