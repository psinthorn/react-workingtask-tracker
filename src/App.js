import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import Addtask from "./components/Addtask"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Hello Text 1",
      date: "18 Apr 2021 11:30 AM",
      reminder: true,
    }, 
    {
      id: 2,
      text: "Hello Text 2",
      date: "18 Apr 2021 11:30 AM",
      reminder: true,
    }, 
    {
      id: 3,
      text: "Hello Text 3",
      date: "18 Apr 2021 11:30 AM",
      reminder: false,
    }, 

  ])

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

       <Header />
       <Addtask />
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
