import React from "react";
import {Link} from "react-router-dom";

import Task from "./Task";

import "../styles/AllDoneTasks.css";

const AllDoneTasks = ({tasks}) =>{

    console.log(tasks);
    

    const finishedTasks = tasks.filter(task => task.isDone).sort((a,b) => b.finishDate - a.finishDate)
                            .map( task => <Task  key={task.id} task={task} /> );



    return(
        

        
    <main className="doneTasks">  
        <button> <Link to="/" >Wróć do strony głownej </Link></button>
        <ul>

          {finishedTasks}
        </ul>  
    </main>
    );
}

export default AllDoneTasks;