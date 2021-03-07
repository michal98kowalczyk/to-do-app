import React from 'react';
import Form from "./Form";
import TasksList from "./TasksList";

import "../styles/Main.css";



const Main = (props) => {
    
    const {tasks,addTask,removeTask,setTaskAsDone,toggleImportant} = props;

    return(
        <main>
            <Form addTask={addTask} />
            <TasksList tasks={tasks} setTaskAsDone={setTaskAsDone} removeTask={removeTask} toggleImportant={toggleImportant}/>
        </main>
    )
}

export default Main;