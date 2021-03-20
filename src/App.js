import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import Addtask from "./components/Addtask"

function App() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])

  // Add taks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id) 
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  
  return (
    <div className="container">
      <header className="App-header">
       <Header onAdd={ () => setShowAddForm(!showAddForm) }  showAddCloseBtn={showAddForm} />

       { showAddForm &&
       <Addtask onAdd={addTask} />
        }

       {tasks.length > 0 ? (
       <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
       ):(
         'No work tasks available'
        )}
       
      </header>
    </div>
  );
}

export default App;
