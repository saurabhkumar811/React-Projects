import { createContext, useContext } from "react";

export const TodoContext = createContext({

    todos: [
    {
        id : 1 ,
        todo :"hello",
        completed : false 
    }
    ],

    addTodo : (todo)=>{},
    updateTodo :(id , todo)=>{},
    deleteTodo :(id0)=>{},
    toggleCompleted :(id)=>{}
})


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider()