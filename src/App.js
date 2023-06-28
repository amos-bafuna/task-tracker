import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();

      setTask(tasksFromServer);
    };

    getTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  //Fetch Tasks
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTask([...tasks, data]);
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTask(tasks.filter((del) => del.id !== id));
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        addShow={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        toggleReminder={toggleReminder}
      />
    </div>
  );
}

export default App;
