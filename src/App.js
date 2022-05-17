import React, { useState } from "react";
import './App.css';
import ListItem from "./component/ListItem";
import NewTaskInput from "./component/NewTaskInput";

const App = () => {
  const [tasks, setTasks] = useState([]);


  function addNewTask(task) {
    const itensCopy = Array.from(tasks);
    itensCopy.push({id: tasks.length, value: task});
    setTasks(itensCopy);
  }

  function updateTask({target}, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: EventTarget.value });
    setTasks(itensCopy);
  }

  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }

  return (
    <div className="App">
      <div className="App-header">
        <NewTaskInput onSubmit={addNewTask} />
        {tasks.map(({id, value}, index) => (
          <ListItem
            key={id}
            value={value}
            onChange={(event) => updateTask(event, index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  )
};

export default App;
