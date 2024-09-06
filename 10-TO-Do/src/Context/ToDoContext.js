import { createContext, useContext } from "react";


export const ToDoContext = createContext({
    todos: [{
        id: 1,
        todo: "todo Message",
        completed: false
    }
    ],
    addtodo: (todo) => { },
    deleteTodo: (index) => { },
    updateTodo: (todo, index) => { },
    toggleComplete: (id) => { }
})



export const useToDo = () => {
    return useContext(ToDoContext)
}



export const ToDoContextProvider = ToDoContext.Provider