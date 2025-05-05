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
      setTasks((prevTasks) => [
        ...prevTasks,
        { Task: newTask, id: uuidv4(), style: {} }, // Add empty style initially
      ]);
      setNewTask(""); // clear input after submit
    }
  }

  // Mark task as done by adding line-through style
  function Markdone(id) {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, style: { textDecoration: 'line-through' } }; // Add line-through style
      }
      return task;
    }));
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
      <h1>Tasks TODO</h1>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={task.style} // Apply the style here
          >
            {task.Task} &nbsp;
            <button onClick={() => Markdone(task.id)}>
              <i className="fa-solid fa-check"></i> {/* Checkmark icon */}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
