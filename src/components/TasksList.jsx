import React from 'react';
import {Link} from "react-router-dom";

import "../styles/TasksList.css";
import Task from './Task';

const TasksList = (props) => {

    

    const {tasks,setTaskAsDone,removeTask} = props;
    
    const allUnfinishedTasks =  tasks.filter(task => !task.isDone)
                            .map(task => <Task key={task.id}  task={task} setTaskAsDone={setTaskAsDone} removeTask={removeTask}/>); 
                            

    const finishedTasks = tasks.filter(task => task.isDone).sort((a,b) => b.finishDate - a.finishDate)
                            .map( task => <Task  key={task.id} task={task} setTaskAsDone={setTaskAsDone} removeTask={removeTask}/> );
                            
    
    

    const today = new Date();
    const dateToCompare = today.getDay() > 10 ? today : "0"+today.toLocaleDateString();

    const todaysTasks = tasks.filter(task => task.date === dateToCompare && !task.isDone)
                        .map(task => <Task key={task.id} task={task} setTaskAsDone={setTaskAsDone} removeTask={removeTask} />);

    return (
        <>
        <section className="all">
            Wszytskie taski do zrobienia
        <ul>
            {allUnfinishedTasks}
        </ul>
        
        </section>
        <section className="today"> 
        Na dzisiaj
        <ul>
            {todaysTasks}
        </ul>
        </section>
         
        <section className="done">
            zrobione
        <ul>
            {finishedTasks.slice(0,5)}
        </ul>
        
        <p>Łącznie wykonanych zadań <span>{finishedTasks.length}</span></p>
        
        {finishedTasks.length>5 &&  <button> <Link to="/done" >Pokaż wszystkie </Link></button>}

        </section>
        </>
    )
}

export default TasksList;