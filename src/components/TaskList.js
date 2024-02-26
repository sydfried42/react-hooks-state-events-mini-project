import React, {useState} from "react";
import Task from "./Task";



function TaskList({taskData, selected, setTaskList}) {

  
  function handleDelete(task) {
    console.log(task)
  
    const newList = taskData.filter((i)=> {
      return i !== task})
    

      setTaskList(newList);

  }


 
  return (
    <div className="tasks">
      
      {taskData.filter((task) => selected === task.category || selected === "All").map((task, index) => (
        
  
        <Task 
        list={taskData}
        setList={setTaskList}
        handleDelete={handleDelete}
        key={index} 
        task={task}
        taskData={taskData} 
        />
        ))}
      

      

    </div>
  );
}

export default TaskList;
