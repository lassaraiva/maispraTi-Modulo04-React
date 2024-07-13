//Usando o hook useState
import { useState } from "react";
import '../App.css';

//Contador
const Aula35 = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="container">
      <h1>Contador: {count}</h1>
      <button className="add-button" onClick={() => setCount(count + 1)}>Conte +</button>

      <MirrorText />
      <TodoList />
    </div>
  );
};

//Efeito Mirror
const MirrorText = () => {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h1>Mirror Text:</h1>
      <input
        type="text"
        placeholder="Digite o texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Você digitou: {text}</p>
      <p>Texto espelhado: {text.split('').reverse().join('')}</p>
    </div>
  );
};

//ToDo list
const TodoItem = ({ task, onDelete, onToggleDone }) => {
  return (
    <tr>
      <td>{task.text}</td>
      <td>
        <button 
          onClick={onToggleDone} 
          style={{ backgroundColor: task.done ? '#c6ff00' : '' }} 
          className="done-Button"
        >
          ✔
        </button>
      </td>
      <td>
        <button onClick={onDelete} className="delete-toDo-button">X</button>
      </td>
    </tr>
  );
};
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTasks = [...tasks, { text: inputValue, done: false }];
      setTasks(newTasks);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const toggleTaskDone = (index) => {
    const newTasks = tasks.map((task, taskIndex) => 
      taskIndex === index ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <h2>ToDo List</h2>
      <div className="input-container">
        <input 
          type="text"
          placeholder="Enter task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="name-input"
        />
        <button onClick={addTask} className="add-button">Add</button>
      </div>
      <table className="toDo-list">
        <thead>
          <tr>
            <th>Task</th>
            <th>Done</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TodoItem 
              key={index} 
              task={task} 
              onDelete={() => deleteTask(index)} 
              onToggleDone={() => toggleTaskDone(index)} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Aula35;
//Navegação entre páginas feita com React Router