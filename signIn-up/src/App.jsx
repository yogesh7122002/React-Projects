import React from 'react';
import Signup from './Signup/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './login/Login';



function App() {
  const route = createBrowserRouter(
    [
      {
        path: "/",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      },


    ]

  )
  return <div className='App'>
    <RouterProvider router={route}>
    </RouterProvider>
  </div>
  // <>
  //   {/* <h2>React App</h2> */}
  //   <Signup />
  // </>


}

export default App;

// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//        {/* <h2>React App</h2> */}
//        <Signup/>
//     </>
//   )
// }

// export default App
