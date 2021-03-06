import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTrashAlt } from '@fortawesome/fontawesome-free-solid'

import "../styles/Task.css";

const Task = (props) => {
    const {task,setTaskAsDone,removeTask} = props;
    const {id,title,date,isDone} = task;

    
    const handleOnFinishTask = e =>{
       
        setTaskAsDone(id);
    }

    const handleOnRemoveTask = e =>{
        removeTask(id);
    }
    
    

    const iconsForTask = <>
        <FontAwesomeIcon onClick={handleOnFinishTask} className="approve" icon={faCheckSquare} /> 
        <FontAwesomeIcon onClick={handleOnRemoveTask} className="remove" icon={faTrashAlt} />
        </>

    return(
        <li > {title} - {date} 
        {!isDone && iconsForTask}
        
        </li>
    )
}


export default Task;