import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({tasks, onTaskClicked, onTaskDelete}) {

    const navigate = useNavigate();

    const onSeeDetailsClick = (task) => {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    return (
        
        <ul className="space-y-4 p-6 bg-slate-50 rounded-md">
            {tasks.map((task) => 
            <li key={task.id} className="flex gap-2"> 
                
                <button onClick={() => onTaskClicked(task.id)} 
                    className={`bg-slate-300 p-2 rounded-md w-full text-center  ${task.isCompleted &&           'line-through'}`}>
                    {/* Renderiza o título da tarefa */}
                    {task.title}
                    {/* {task.isCompleted ? '✔️' : '❌'} */}
                 </button>
               
                <Button onClick={() => onSeeDetailsClick(task)}>
                    Details
                </Button>
                
                <Button onClick={() => onTaskDelete(task.id)}>
                    ❌
                </Button>
            </li>
            )}

        </ul>

    );
}



export default Tasks;