import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTrashAlt, faExclamation } from '@fortawesome/fontawesome-free-solid'

import "../styles/Task.css";

const Task = (props) => {
    const {task,setTaskAsDone,removeTask,toggleImportant} = props;
    const {id,title,date,isDone,isImportant} = task;

    
    const handleOnFinishTask = e =>{
       
        setTaskAsDone(id);
    }

    const handleOnRemoveTask = e =>{
        removeTask(id);
    }
    const handleOnToggleImportant = e =>{
        toggleImportant(id);
    }
    
    

    const iconsForTask = <>
        <FontAwesomeIcon onClick={handleOnFinishTask} className="approve" icon={faCheckSquare} /> 
        <FontAwesomeIcon onClick={handleOnToggleImportant} className="toggleImportant" icon={faExclamation} />
        <FontAwesomeIcon onClick={handleOnRemoveTask} className="remove" icon={faTrashAlt} />
        </>

    return(
        <li className={isImportant ? "important" : ""}> {title} - {date} 
        {!isDone && iconsForTask}
        
        </li>
    )
}


export default Task;