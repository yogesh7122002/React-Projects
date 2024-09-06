import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoContextProvider } from './Context/ToDoContext'

function App() {
  const [todos, setTodos] = useState([])
  const addtodo = (todo) => //This To you will be getting from the input feild this will be in String Format 
  {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])

  }

  const updateTodo = (id,todo) => {


  }

  return (
    <>
      <ToDoContextProvider value={{ todos, toggleComplete, addtodo, updateTodo, deleteTodo }}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */}
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
            </div>
          </div>
        </div>

      </ToDoContextProvider>
    </>
  )
}

export default App











