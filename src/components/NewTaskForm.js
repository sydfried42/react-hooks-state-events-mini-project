import React, {useState } from "react";

function NewTaskForm({CATEGORIES, taskList, setTaskList}) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("All")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!");
    let newTask = { text: name, category };
    console.log(newTask)
    setTaskList([...taskList, newTask])
  }

  console.log(taskList)

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        type="text" 
        name="text" />
      </label>
      <label>
        Category
        <select 
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        name="category">
          <option value={CATEGORIES[1]}>Code</option>
          <option value={CATEGORIES[2]}>Food</option>
          <option value={CATEGORIES[3]}>Money</option>
          <option value={CATEGORIES[4]}>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
