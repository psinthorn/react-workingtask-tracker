import {useState} from 'react'

const Addtask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    // On submit task

    const onSubmit = (e) => {
        e.preventDefault()

        // Validate if empty task input then alert on submit
        if(!text){
            alert("Please add task.")
            return
        }

        // send data objects to onAdd function to process
        onAdd({ text, date, reminder})

        // clear form after sent data objects
        setText('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Add Task</label>
            <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="what you have to do? add task." 
            />
        </div>

        <div className="form-control">
            <label>Date</label>
            <input 
                type="text" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Due date" />
        </div>

        <div className="form-control form-control-check">
            <label>Reminder</label>
            <input 
                type="checkbox"
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
            />

        </div>

        <div className="form-control" >
            <input type="submit" className="btn btn-block" value="Save Task" />
        </div>
        </form>
    )
}

export default Addtask
