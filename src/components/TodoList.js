import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {addTodo, completedTodo,deletedTodo} from "../store/todoSlice";

function TodoList() {

  const [text,settext] = useState("");
  const [view,setview] = useState(0);
   const list = useSelector((state) => state.TodoReducer.todos)
   console.log(list)
   const dispatch = useDispatch();
   
   const list1 = list.map((obj) => obj);
   
   const aa = (
    list1.filter(item => item.completed == true)
   )

   const bb = (
    list1.filter(item => item.completed == false)
   )

  
   return(
       <div> 
         <center>
           <br></br>
         <div class="h1">To Do List</div>
         <div>
          {
          (view == 0)?(
        <ul class="list-group">
            {
               list.map((obj) => {
                 if(obj.title != ""){
                 return( 
                 <li class="list-group-item" style={(obj.deleted == true)?{textDecoration:"line-through"}:{}}>
                  { 
                     (obj.deleted == false)?(
                      <input type="checkbox" checked={(obj.completed == true)?(true):(null)} onChange={() => dispatch(completedTodo(obj.id))}/>
                     ):(null)
                    
                  }
                  &nbsp;
                   {obj.title}
                   &nbsp;
                   {
                     
                     (obj.completed == false && obj.deleted == false)?( 
                   <input type ="button"  class="btn btn-danger" value="x" onClick={()=> dispatch(deletedTodo(obj.id))} />
                     ):(null) 
                  }
                 </li>
                 )
                 } })
              
            }
           </ul>):(null)
        }
            {
          (view == 3)?(
        <ul class="list-group">
            {
               aa.map((obj) => {
                if(obj.title != ""){
                return( 
                 <li class="list-group-item" style={(obj.deleted == true)?{textDecoration:"line-through"}:{}}>
                   {obj.title}
                 </li>
                 )
                 }
              })
              
            }
           </ul>):(null)
        }
              {
          (view == 2)?(
        <ul class="list-group">
            {
               bb.map((obj) => {
                if(obj.title != "" && obj.deleted == false){
                return( 
                 <li class="list-group-item" style={(obj.deleted == true)?{textDecoration:"line-through"}:{}}>
                   {obj.title}
                 </li>
                 )
                }
                })
            }
           </ul>):(null)
        }
          </div>
          <br></br>
         <div class="col-6">
          <b><span>Show:</span></b>&nbsp;
          <input type="button" class="btn btn-primary" value="All"  onClick={()=> setview(0)}/> &nbsp;
         <input type="button" class="btn btn-primary" value="Active" onClick={()=> setview(2)} /> &nbsp;
         <input type="button" class="btn btn-primary" value="Completed" onClick={()=> setview(3)}/> &nbsp;
         </div>
    <br></br>
           <div class="col-6"> 
            <b><span>Task:</span></b>&nbsp;
              <input type="text" onChange={(e) => {settext(e.target.value) }} style={{width:'300px',height:'40px'}}/>&nbsp;
              <input type="button" class="btn btn-primary" value="Add Task" onClick={() => (text == "")?(null):(dispatch(addTodo(text)))}/> 
              
           </div>
           </center>
       </div>
   
   )

}

export default TodoList;