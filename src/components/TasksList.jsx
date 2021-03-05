import React from 'react';

import "../styles/TasksList.css";

const TasksList = () => {
    return (
        <>
        <section className="all">Wszytskie taski do zrobienia</section>
        <section className="today"> Na dzisiaj</section>   
        <section className="done">zrobione</section>
        </>
    )
}

export default TasksList;