import React from 'react';
import {Link} from "react-router-dom";

import "../styles/TasksList.css";
import Task from './Task';

const TasksList = (props) => {

    

    const {tasks,setTaskAsDone,removeTask,toggleImportant} = props;
    
    const allUnfinishedTasks =  tasks.filter(task => !task.isDone)
                            .map(task => <Task key={task.id}  
                                task={task} 
                                setTaskAsDone={setTaskAsDone} 
                                removeTask={removeTask}
                                toggleImportant={toggleImportant}
                                />); 
                            

    const finishedTasks = tasks.filter(task => task.isDone).sort((a,b) => b.finishDate - a.finishDate)
                            .map( task => <Task  key={task.id}
                                 task={task} 
                                 setTaskAsDone={setTaskAsDone} 
                                 removeTask={removeTask}
                                 
                                 /> );
                            
    
   

    const today = new Date();
    

    const dateToCompare = today.getDate() > 10 ? today.toLocaleDateString() : "0"+today.toLocaleDateString();

 

    const todaysTasks = tasks.filter(task => task.date === dateToCompare && !task.isDone)
                        .map(task => <Task key={task.id} 
                            task={task} 
                            setTaskAsDone={setTaskAsDone} 
                            removeTask={removeTask} 
                            toggleImportant={toggleImportant}
                            />);

    return (
        <>
        <section className="all">
           <h2>Wszystkie taski do zrobienia</h2> 
        <ul>
            {allUnfinishedTasks}
        </ul>
        
        </section>
        <section className="today"> 
        <h2>Na dzisiaj</h2>
        
        <ul>
            {todaysTasks}
        </ul>
        </section>
         
        <section className="done">
        <div className="doneTasks">
        <h3>zrobione</h3>
            
        <ul>
            {finishedTasks.slice(0,3)}
        </ul>
        </div>
        
        <div className="stats">
        <p>Łącznie wykonanych zadań <span>{finishedTasks.length}</span></p>
        
        {finishedTasks.length>3 &&  <button> <Link to="/done" >Pokaż wszystkie </Link></button>}
        </div>

        </section>
        </>
    )
}

export default TasksList;