import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import  "./styles/App.css";


const defaultTasks = [{id:1,title:"pierwszy task",date:"06.03.2021",isDone:false,isImportant:false, finishDate:0},
                      {id:2,title:"drugi task",date:"07.03.2021",isDone:false,isImportant:false, finishDate:1},
                      {id:3,title:"trzeci task",date:"06.03.2021",isDone:true,isImportant:false, finishDate:2},
                      {id:4,title:"czwarty task",date:"05.03.2021",isDone:false,isImportant:false, finishDate:0},
                      {id:5,title:"5 task",date:"06.03.2021",isDone:false,isImportant:false, finishDate:0},
                      {id:6,title:"6 task",date:"07.03.2021",isDone:false,isImportant:false, finishDate:1},
                      {id:7,title:"7 task",date:"06.03.2021",isDone:true,isImportant:false, finishDate:5},
                      {id:8,title:"8 task",date:"05.03.2021",isDone:false,isImportant:false, finishDate:0}];

const App = () => {

  const [tasks,setTask] = useState(defaultTasks);

  const addTask = task => setTask([...tasks,task]);

  const setTaskAsDone = id => {
    console.log(id);
  }

  const removeTask = id =>{
    console.log(id);
  }


  return (
    <div className="App">

      <Header/>
      <Main tasks={tasks} addTask={addTask} setTaskAsDone={setTaskAsDone} removeTask={removeTask} />
      <Footer/>


      


    </div>
  );
}

export default App;
