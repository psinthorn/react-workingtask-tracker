import {useState, useEffect, Fragment} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Tasks from "./components/Tasks"
import Addtask from "./components/Addtask"
import About from "./components/About"


function App() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
      const getTasks = async () => {
        const tasks = await fetchTasks()
        setTasks(tasks)
      }
      getTasks()
  }, [])

  // Fetch all tasks
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`)
    const data = await res.json()
    return data
  }

  // Fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // Add taks
  const addTask = async (task) => {

    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(task)
    })

    const newTask = await res.json()

    setTasks([...tasks, newTask])

    // const id = Math.floor(Math.random() * 10000) + 1
    // console.log(id)

    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])

  }

  // Delete task
  const deleteTask =  async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {

    const taskById = await fetchTask(id)

    const updateTask = {...taskById, reminder: !taskById.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(updateTask)
    })

    // ค่าที่รับกลับหลังจากอัพเดทที่ serverแล้ว
    const data = await res.json()

    // settasks on frontend the use latest data from server
    // อัพเดทค่า task ที่ frontend  ให้ตรงกับข้อมูลล่าสุดที่รับมาจาก server
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  
  }


  
  return (

    <Router>
      <Fragment>
        <div className="container">
              <header className="App-header">
                  <Header onAdd={ () => setShowAddForm(!showAddForm) }  showAddCloseBtn={showAddForm} />
        
                      <Route path="/" exact render={(props) => (
                        <Fragment>
                                { showAddForm &&
                                <Addtask onAdd={addTask} />
                                  }

                                {tasks.length > 0 ? (
                                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                                ):(
                                  'No work tasks available'
                                  )}
                        </Fragment>
                      )} />

              </header>
              <Route path="/about" component={About} />
        </div>
        <div className="card m-4">
            <div className="card-body">
              <Footer className="mt-3" />
            </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
