import { useState } from 'react';
import './App.css';
import {Task} from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent empty tasks
    
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
    setNewTask(""); // Clear input after adding
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask">
        <h1>My Todo List</h1>
        <input 
          value={newTask}
          onChange={handleChange}
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
        return <Task 
        taskName={task.taskName} 
        id={task.id} 
        delete={deleteTask}
        />
        ;

        })}
      </div>
    </div>
  );
}

export default App;