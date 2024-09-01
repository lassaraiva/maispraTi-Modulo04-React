// Importa os hooks useState e useEffect da biblioteca React para gerenciar estado e efeitos colaterais.
import { useState, useEffect } from 'react';
import { Container, Title, Input, Button, TaskList, TaskItem, EditInput } from './ToDoAppStyles';

// Define a URL da API que será usada para obter, adicionar, editar e excluir tarefas.
const API_URL = 'http://localhost:5000/tasks';

// Define o componente funcional TodoApp.
const TodoApp = () => {
  // Usa o hook useState para criar variáveis de estado para a tarefa atual, lista de tarefas, tarefa em edição e texto da tarefa em edição.
  const [task, setTask] = useState(''); // Estado para a nova tarefa a ser adicionada.
  const [tasks, setTasks] = useState([]); // Estado para a lista de tarefas.
  const [editingTaskId, setEditingTaskId] = useState(null); // Estado para o id da tarefa que está sendo editada.
  const [editingTaskText, setEditingTaskText] = useState(''); // Estado para o texto da tarefa que está sendo editada.

  // Usa o hook useEffect para buscar as tarefas quando o componente é montado.
  useEffect(() => {
    fetchTasks();
  }, []);

  // Função que busca as tarefas da API armazenadas no localStorage.
  const fetchTasks = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []; //Recupera as tarefas do localStorage ou retorna uma lista vazia
    setTasks(savedTasks); //Atualiza o estado com as tarefas recuperadas.
  };

  // Função que salva as tarefas no localStorage.
  const saveTasks = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Salva as tarefas atualizadas no localStorage.
    setTasks(updatedTasks); // Atualiza o estado com as tarefas atualizadas.
  };

  // Função que adiciona uma nova tarefa.
  const addTask = () => {
    if (task) { // Verifica se o campo da tarefa não está vazio.
      const newTask = { id: Date.now(), text: task }; // Cria um objeto de tarefa com um id único e o texto fornecido.
      const updatedTasks = [...tasks, newTask]; // Adiciona a nova tarefa à lista de tarefas existentes.
      saveTasks(updatedTasks); // Salva a lista atualizada no localStorage e no estado.
      setTask(''); // Limpa o campo de entrada.
    }
  };

  // Função que exclui uma tarefa.
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id); // Filtra a lista de tarefas removendo a tarefa com o id fornecido.
    saveTasks(updatedTasks); // Salva a lista atualizada no localStorage e no estado.
  };

  // Função que inicia o processo de edição de uma tarefa.
  const editTask = (id, text) => {
    setEditingTaskId(id); // Define o id da tarefa que está sendo editada.
    setEditingTaskText(text); // Define o texto da tarefa que está sendo editada.
  };

  // Função que atualiza uma tarefa existente.
  const updateTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: editingTaskText } : task // Substitui a tarefa com o id correspondente pelo texto editado.
    );
    saveTasks(updatedTasks); // Salva a lista atualizada no localStorage e no estado.
    setEditingTaskId(null); // Limpa o id da tarefa em edição.
    setEditingTaskText(''); // Limpa o texto da tarefa em edição.
  };

  // Função que cancela a edição de uma tarefa.
  const cancelEdit = () => {
    setEditingTaskId(null); // Limpa o id da tarefa em edição.
    setEditingTaskText(''); // Limpa o texto da tarefa em edição.
  };

  // Função que salva a tarefa editada.
  const saveEdit = () => {
    if (editingTaskText.trim()) { // Verifica se o texto da tarefa não está vazio.
      updateTask(editingTaskId); // Atualiza a tarefa.
    } else {
      cancelEdit(); // Cancela a edição se o texto estiver vazio.
    }
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <Title>Todo App</Title> {/* Exibe o título do aplicativo de tarefas */}
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={addTask}>Add Task</Button>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {editingTaskId === task.id ? (
              <>
                <EditInput
                  type="text"
                  value={editingTaskText}
                  onChange={(e) => setEditingTaskText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {task.text}
                <div>
                  <button onClick={() => editTask(task.id, task.text)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

// Exporta o componente TodoApp para que possa ser utilizado em outras partes da aplicação.
export default TodoApp;