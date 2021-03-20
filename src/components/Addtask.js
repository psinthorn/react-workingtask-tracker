import {useState} from 'react'

const Addtask = () => {

    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <form className="add-form">
        <div className="form-control">
            <lable>Add Task</lable>
            <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="what you have to do? add task." 
            />
        </div>

        <div className="form-control">
            <lable>Date</lable>
            <input 
                type="text" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Due date" />
        </div>

        <div className="form-control form-control-check">
            <lable>Reminder</lable>
            <input 
                type="checkbox"
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
            />

        </div>

        <div className="form-control">
            <input type="submit" className="btn btn-block" value="Save Task" />
        </div>
        </form>
    )
}

export default Addtask
