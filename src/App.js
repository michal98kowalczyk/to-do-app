import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import  "./styles/App.css";


const defaultTasks = [{id:1,title:"pierwszy task",date:"2021-03-06",isDone:false,time:0},
                      {id:2,title:"drugi task",date:"2021-03-07",isDone:false,time:1},
                      {id:3,title:"trzeci task",date:"2021-03-06",isDone:true,time:2},
                      {id:4,title:"czwarty task",date:"2021-03-05",isDone:false,time:0}];

const App = () => {

  const [tasks,setTask] = useState(defaultTasks);



  return (
    <div className="App">

      <Header/>
      <Main/>
      <Footer/>


      


    </div>
  );
}

export default App;
