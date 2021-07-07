import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "../components/CreateArea";



function App(){
   const [notes,setnotes] = useState([]);


   function addNote(newNote){
      setnotes(prevNotes=>{
        return  [...prevNotes,newNote];
      })
   }

   function deleteNote(id){
      setnotes(prevNote=>{
         return prevNote.filter((noteitem,index)=>{
            return index!=id;
         })
      })
   }



   return ( 
   <div>

   <Header/>

   <CreateArea  
      onAdd = {addNote}
   />

   {notes.map((noteitem,index) => {
      return <Note 
         key = {index}
         id={index}
         title = {noteitem.title}
         content = {noteitem.content}
         onDelete = {deleteNote}
      />

   })}
   <Footer/>
   </div>);
}

export default App;