import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){

   


    const[note ,setnote] = useState({
         title:"",
        content:""
    })

function  handleChange(event){
    const {name,value} = event.target;
    setnote(prevNote=>{
        return {
            ...prevNote,
            [name]:value
        }
    })

}

function submitNote(event){
    event.preventDefault();

    props.onAdd(note);
    setnote({
        title:"",
        content:"" 
    });
}

const [isExpanded,setExpanded] = useState(false);

function expand(){
    setExpanded(true);    
}
return (
<div>
    <form className = "create-note">
       
        {isExpanded?<input onChange = {handleChange} name = "title" value = {note.title} placeholder = "Title"/>:null}
        
        
        <textarea onClick = {expand} onChange = {handleChange} name= "content" value = {note.content} placeholder = "Take a note ...." row = {isExpanded?3:1}/>

      <Zoom in = {isExpanded}><Fab onClick = {submitNote}><AddIcon/></Fab></Zoom>
    </form>
</div>);
}

export  default CreateArea;
