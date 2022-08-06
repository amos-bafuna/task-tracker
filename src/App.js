import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Dating with friends",
      day: "5th July 3:30PM",
      reminder: true
    },
    {
      id: 2,
      text: "Hanging out with X",
      day: "10th June 12:20PM",
      reminder: true
    },
    {
      id: 3,
      text: "Doctor Appointment",
      day: "20th April 8:00AM",
      reminder: true
    }
  ])

  const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1;
      const newTask = {id, ...task}

      setTask([...tasks, newTask])
  }

  const toggleReminder = (id) => {
    setTask(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  const deleteTask = (id) =>{
    setTask(tasks.filter(del => del.id !== id))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} addShow={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
    </div>
  )
}

export default App;
