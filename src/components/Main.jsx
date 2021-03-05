import React from 'react';
import Form from "./Form";
import TasksList from "./TasksList";

import "../styles/Main.css";



const Main = (props) => {
    
    const {tasks,addTask} = props;

    return(
        <main>
            <Form addTask={addTask} tasks={tasks}/>
            <TasksList tasks={tasks}/>
        </main>
    )
}

export default Main;