import React, { useState } from "react";

import "../styles/Form.css";

const Form = ({addTask}) => {

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth()+1)>9 ? today.getMonth()+1 : `0${today.getMonth()+1}` ;
    const day = today.getDate()>10 ? today.getDate() : "0"+today.getDate();
    const _date = [year,month,day].join('-');



   

    const [title, setTitle] = useState("");
    const [date,setDate] = useState(_date);
    const [isImportant,setIsImportant] = useState(false);

    const handleOnTitleChange = (e) => setTitle(e.target.value);
    const handleOnDateChange = (e) => setDate(e.target.value);
        
    
    const handleOnIsImportantChange = (e) => setIsImportant(!isImportant);

    const handleAddTask = (e) =>{
        e.preventDefault();

        if(!title.length){
            alert("Pole z nazwą zadania nie może być puste!!!");
            return;
        }
      
        const _year = date.slice(0,4);
        const _month = date.slice(5,7) ;
        const _day = date.slice(8);
      
        const task = {
            id: Math.floor(Math.random()*1000),
            title,
            date : [_day,_month,_year].join('.'),
            isImportant,
            isDone:false,
            finishDate:0


        }
        
     

        addTask(task);
        setTitle('');
        setDate(_date);
        setIsImportant(false);



    }

    return(
        <form >

            <label htmlFor="title">Nazwa zadania:
            <input id="title" value={title} onChange={handleOnTitleChange} type="text"  />
            </label>
            <label htmlFor="date">Data wygaśnięcia:
            <input id="date" value={date}  onChange={handleOnDateChange} min={_date}  max={[year+1,month,day].join('-')} type="date"/>
            </label>
            <label htmlFor="checkbox">Pilne:
            <input id="checkbox" checked={isImportant} onChange={handleOnIsImportantChange} type="checkbox"/>
            </label>
            


            <button onClick={handleAddTask} >Dodaj</button>
        </form>
    )
}

export default Form;