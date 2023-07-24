import React, { useState } from "react";
import "./App.css"
import Todoinput from "./components/Todoinput";
import Todo from './components/Todo';
function App() {
        const [listTodo,SetListTodo]=useState([]);
        let addList = (inputText)=>{
          if(inputText!=='')
       SetListTodo([...listTodo,inputText]);

    }
    const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
        SetListTodo([...newListTodo])
    }    

    return(

        <div className="main-container">
        <div className="center-container">
            <Todoinput addList={addList} />
            <h1 className="app-heading">ToDo <br/>(Lovely writes)</h1>
                <hr/>
                {listTodo.map((listItem,i)=>{
            
            return(
                <Todo index={i} key={i} item={listItem}  deleteItem={deleteListItem} />
            )

            })}
        </div>
        </div>

    )

}
export default App;