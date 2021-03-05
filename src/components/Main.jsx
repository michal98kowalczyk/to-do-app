import React from 'react';
import Form from "./Form";
import TasksList from "./TasksList";

import "../styles/Main.css";



const Main = () => {
    

    return(
        <main>
            <Form/>
            <TasksList/>
        </main>
    )
}

export default Main;