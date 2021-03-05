import React from 'react';

import "../styles/TasksList.css";
import Task from './Task';

const TasksList = (props) => {

    const {tasks} = props;
    console.log(tasks);

    const allUnfinishedTasks =  tasks.filter(task => !task.isDone)
                            .map(task => <Task key={task.id} title={task.title} date={task.date}/>); 
                            

    const finishedTasks = tasks.filter(task => task.isDone)
                            .map( task => <Task  key={task.id} title={task.title} date={task.date}/> );
    
    

    const today = new Date();
    const dateToCompare = today.getDay() > 10 ? today : "0"+today.toLocaleDateString();

    const todaysTasks = tasks.filter(task => task.date === dateToCompare)
                        .map(task => <Task key={task.id} title={task.title} date={task.date} />);

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
            {finishedTasks}
        </ul>
        
        <p>Łącznie wykonanych zadań <span>{finishedTasks.length}</span></p>
        
        {finishedTasks.length>5 &&  <button>Pokaż wszystkie</button>}

        </section>
        </>
    )
}

export default TasksList;