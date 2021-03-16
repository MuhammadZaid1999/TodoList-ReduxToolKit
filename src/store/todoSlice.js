import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice ({
  name: "ToDoSlice",
  initialState: {
    todos: [{id:"",title:"",completed:false,deleted:false}]
  },

  reducers:{
     addTodo: (state,action) => {
       state.todos.push({id:uuidv4(),title:action.payload,completed:false,deleted:false})
     },

     completedTodo: (state,action) => {
      state.todos.map((obj)=>{
        if(obj.id == action.payload){
          obj.completed = true
        }
      })
    },

    deletedTodo: (state,action) => {
      state.todos.map((obj)=>{
        if(obj.id == action.payload){
          obj.deleted = true
        }
      })
    }
   
  }

})

export const {addTodo,completedTodo,deletedTodo} = todoSlice.actions;
export const TodoReducer = todoSlice.reducer;