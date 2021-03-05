import React from "react";

import "../styles/Task.css";

const Task = (props) => {
    const {title,date} = props;
    

    return(
        <li > {title} - {date}</li>
    )
}

export default Task;