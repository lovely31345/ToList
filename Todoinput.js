import React, { useState } from 'react'

function Todoinput(props) {

    const [inputText,SetInputText] = useState('');
    const handleEnterpress =(e)=>{
        if(e.keycode==13){
            props.addList(inputText)
            SetInputText("")

        }
    }
  return (
    <div className='input-container' > 
    <input type="text" className="Input-Box-Todo"  value={inputText} placeholder='.......Enter Your ToDo.......'
     onChange={e=>{
        SetInputText(e.target.value)

     }}
     onKeyDown={handleEnterpress}
    />
<button className='add-btn' onClick={()=>{
props.addList(inputText)
   SetInputText("")
}}>+
    
</button>
    
    </div>
  )
}

export default Todoinput