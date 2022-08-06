import Task from "./Task"

function Tasks ({tasks, deleteTask, toggleReminder}) {
    return (
        <>
           {tasks.length > 0 ? tasks.map(task =>(
                <Task key={task.id} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
           )) : 'No Task to Show' }
        </>
    )
}

export default Tasks