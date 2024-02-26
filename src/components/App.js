import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

const taskData = { CATEGORIES, TASKS }
console.log(taskData)


function App() {

  const [selected, setSelected] = useState("All")
  const [taskList, setTaskList] = useState(TASKS)
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      selected={selected}
      setSelected={setSelected}
      CATEGORIES={CATEGORIES}/>
      <NewTaskForm 
      CATEGORIES={CATEGORIES}
      taskList={taskList}
      setTaskList={setTaskList}
      />
      <TaskList 
      setTaskList={setTaskList}
      selected={selected}
      taskData={taskList} />
    </div>
  );
}

export default App;
