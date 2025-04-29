import { useState } from 'react';
import './app.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function inputHandler(e) {
    setNewTask(e.target.value);
  }

  function submitHandler() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, { Task: newTask, id: uuidv4() }]);
      setNewTask(""); // clear input after submit
    }
  }

  function DeleteHandler(e){
    console.dir(e);
  }

  return (
    <>
      <input 
        onChange={inputHandler} 
        placeholder="Add a task" 
        value={newTask} 
      />
      <br />
      <br />
      <button onClick={submitHandler}>ADD TASK</button>
      <hr />
      <h3>Tasks TODO</h3>
      <ul>
        {tasks.map(task => (<>
                                <li  onClick={DeleteHandler} key={task.id}>{task.Task} &nbsp; <button>Delete</button></li>
                            </>
        ))}
      </ul>
    </>
  );
}

export default App;
