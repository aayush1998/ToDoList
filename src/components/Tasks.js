import Task from './Task'

const Tasks=({tasks,onDelete,onToggle})=>{
    return(
        <div>
            {tasks.map((task)=>(
                <Task key={task.id} onDelete={onDelete} id={task.id} onToggle={onToggle} task={task}></Task>
            ))}
        </div>
    )
}


export default Tasks;