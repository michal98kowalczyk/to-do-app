import React, { useState } from "react";
import {Switch, Route, Redirect} from "react-router-dom";




import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AllDoneTasks from "./components/AllDoneTasks";

import  "./styles/App.css";


const defaultTasks = [{id:1,title:"pierwszy task",date:"06.03.2021",isDone:false,isImportant:false, finishDate:0},
                      {id:2,title:"drugi task",date:"07.03.2021",isDone:false,isImportant:false, finishDate:0},
                      {id:3,title:"trzeci task",date:"06.03.2021",isDone:false,isImportant:false, finishDate:0},
                      {id:4,title:"czwarty task",date:"05.03.2021",isDone:false,isImportant:true, finishDate:0},
                      {id:5,title:"5 task",date:"06.03.2021",isDone:false,isImportant:true, finishDate:0},
                      {id:6,title:"6 task",date:"07.03.2021",isDone:false,isImportant:false, finishDate:0},
                      {id:7,title:"7 task",date:"06.03.2021",isDone:false,isImportant:false, finishDate:0},
                      {id:8,title:"8 task",date:"05.03.2021",isDone:false,isImportant:false, finishDate:0}];

const App = () => {

  const [tasks,setTask] = useState(defaultTasks);

  const addTask = task => setTask([...tasks,task]);

  const setTaskAsDone = id => {
    
    
    const newTasks = tasks.map(task => {
      if(id===task.id){
        task.isDone=true;
        task.finishDate = (new Date()).getTime();
        task.isImportant=false;
      }

      return task;
    }
    
    );
   
    

    setTask(newTasks);
    
  }

  const removeTask = id =>{
   
    const newTasks = tasks.filter(task => task.id!==id);
   
    setTask(newTasks);
  }

  const toggleImportant = id =>{
    const newTasks = tasks.map(task => {
      if(task.id===id) task.isImportant= !task.isImportant;

      return task;
    });

    setTask(newTasks);
  }

  
  return (
    

    
    <div className="App">

      <Header/>

      <Switch>

      <Route path="/"   exact render={()=> <Main 
      tasks={tasks}
       addTask={addTask} 
       toggleImportant = {toggleImportant}
       setTaskAsDone={setTaskAsDone}
        removeTask={removeTask} /> }/>

      <Route path="/done" render={() => <AllDoneTasks tasks={tasks} /> }/>
      <Redirect from="*" to="/"/>

      </Switch>
      
       
    

      <Footer/>


      


    </div>

    
  );
}

export default App;
