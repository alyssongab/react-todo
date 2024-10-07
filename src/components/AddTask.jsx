import { useState } from "react";
import Input from "./Input";

function AddTask({onTaskAdd}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            handleAddTask(event);
        }
    }

    const handleAddTask = (event) => {
        if(!title.trim() || !description.trim()) {
            return alert("Empty Fields!");
        }
            onTaskAdd(title, description);
            
            // Limpa os campos
            setTitle("");
            setDescription("");
            event.target.blur();
    }

    return(
        <div className="space-y-4 p-6 bg-indigo-100 rounded-md flex flex-col">
            
            <Input
            type="text" 
            placeholder="Type the task title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            onKeyDown={handleKeyDown}/>

            <Input 
            type="text" 
            placeholder="Type the task description"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            onKeyDown={handleKeyDown}/>
            
            <button onClick={handleAddTask}
            className="w-3/4 mx-auto bg-indigo-600 p-2 rounded-md text-white hover:scale-105 transition-all" >
                Add
            </button>
        
        </div>
    );
}

export default AddTask;