import React, { useEffect, useState } from 'react';

import AddTask from './components/AddTask.jsx';
import Tasks from './components/Tasks.jsx';

function App() {

  const [tasks, setTasks] = useState( () => {
    // Recupera as tarefas salvas no localStorage ou retorna um array vazio
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  // useEffect executa a função passada como primeiro argumento sempre que
  // o array passado como segundo argumento sofre alterações

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


/*   Se o array passado como segundo argumento estiver vazio, a função passada como
  primeiro argumento é executada apenas uma vez, quando o componente é montado */
  useEffect(() => {
    const fetchTasks = async () => {
      // Chamar a API
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

      // Converter a resposta para JSON
      const data = await response.json();

      // Atualizar o estado
      setTasks(data);
    }

   /*  Se quiser, pode usar uma API para pegas as tarefas
    fetchTasks(); */
  }, []);

  function onTaskClicked(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
      
        // Tarefa precisa ser atualizada
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }
      
        // Tarefa não precisa ser atualizada
        return task;
    });

    setTasks(newTasks);
  }
  
  function onTaskDelete(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskAdd(title, description) {
    const newTask = {
      id: Date.now() % 10000,
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-zinc-900 flex justify-center p-6">

      <div className="w-[500px] space-y-4">
        <h1 className="text-slate-100 font-bold text-center text-3xl">Task Manager</h1>
        <AddTask onTaskAdd={onTaskAdd} />
        {tasks.length > 0 ? 
        ( // Se houver tarefa, exibe a lista de tarefas
          <Tasks tasks={tasks} onTaskClicked={onTaskClicked} onTaskDelete={onTaskDelete} />
        ) 
        : 
        ( // Se não houver tarefa, exibe uma mensagem
          <p className="text-slate-100 text-center">No tasks available.</p>
        )}
      </div>

    </div>
  );
}

export default App
