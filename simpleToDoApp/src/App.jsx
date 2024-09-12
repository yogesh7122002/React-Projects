import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const toggleFinished = () => {
    setShowCompleted(!showCompleted);
  };

  const handleAdd = () => {
    if (todo.trim() === "") {
      alert("Can't add an empty task. Please enter some content.");
      return;
    }
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo("");
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleEdit = (id) => {
    let t = todos.find(todo => todo.id === id);
    setTodo(t.todo);
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
  };

  const handleDelete = (e, id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this todo?");
    if (isConfirmed) {
      const newTodos = todos.filter(item => item.id !== id);
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(todo => todo.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10 p-8 bg-gray-100 rounded-xl shadow-md w-full md:w-3/4 lg:w-1/2">
        <div className="addTodo mb-6">
          <h2 className='text-2xl font-bold mb-4 text-violet-700'>Add a Todo</h2>
          <div className="flex items-center space-x-4">
            <input
              onChange={(e) => { setTodo(e.target.value) }}
              value={todo}
              type="text"
              className='flex-1 h-12 rounded-md px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500'
              placeholder='Enter your task here'
              required
            />
            <button
              type="button"
              className="text-white bg-violet-500 hover:bg-violet-700 py-2 px-6 rounded-md font-bold"
              onClick={handleAdd}
            >
              Save
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              onChange={toggleFinished}
              type="checkbox"
              className="form-checkbox text-violet-500"
              checked={showCompleted}
            />
            <span className="ml-2 text-gray-700">Show Completed</span>
          </label>
        </div>

        <h1 className='text-2xl font-bold mb-6 text-violet-700'>Your Todos</h1>

        <div className="todos space-y-4">
          {todos.length === 0 ? (
            <div className='text-gray-500'>No TODOs to display</div>
          ) : (
            todos
              .filter((item) => showCompleted || !item.isCompleted)
              .map((item, index) => (
                <div
                  className="todo flex justify-between items-center p-4 bg-white rounded-md shadow-md"
                  key={index}
                >
                  <div className='flex items-center'>
                    <input
                      className='form-checkbox h-5 w-5 text-violet-500'
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                    />
                    <div className={`ml-4 text-lg ${item.isCompleted ? "line-through text-gray-400" : ""}`}>
                      {item.todo}
                    </div>
                  </div>

                  <div className="buttons flex space-x-2">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className='text-white bg-blue-500 hover:bg-blue-700 py-1 px-4 rounded-md font-bold'
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => handleDelete(e, item.id)}
                      className='text-white bg-red-500 hover:bg-red-700 py-1 px-4 rounded-md font-bold'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;


// import { useState, useEffect } from 'react'
// import './App.css'
// import Navbar from './Components/Navbar'
// import { v4 as uuidv4 } from 'uuid';

// function App() {
//   const [todo, setTodo] = useState("")
//   const [todos, setTodos] = useState([])
//   const [showCompleted, setshowComplted] = useState([])

//   // const save = (params) => {
//   //   localStorage.setItem('todos', JSON.stringify(todos));

//   // }

//   // useEffect(() => {
//   //   let todoStr = localStorage.getItem("todos")
//   //   if (todoStr.length > 0) {
//   //     setTodos(todos)
//   //   }
//   // }, [])


//   const save = () => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   };

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem("todos"));
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);

//   const toggleFinished = () => {
//     setshowComplted(!showCompleted);

//   }




//   useEffect(() => {
//     console.log(todos);
//   }, [todos]);

//   const handleAdd = () => {
//     if (todo.trim() === "") {
//       alert("Can't add the empty Task Enter Some Content ")
//       return
//     }

//     const newTodos = ([...todos, { id: uuidv4(), todo, isCompleted: false }])
//     setTodos(newTodos)
//     // console.log(todos)
//     setTodo("")
//     localStorage.setItem('todos', JSON.stringify(newTodos));
//   }


//   const handleEdit = (id) => {
//     let t = todos.find(todo => todo.id === id);
//     // let t = todos.filter(r => r.id === id)
//     setTodo(t.todo);
//     const filteredTodos = todos.filter(todo => todo.id !== id);
//     setTodos(filteredTodos);
//     localStorage.setItem('todos', JSON.stringify(filteredTodos))
//   }
//   // let t = todos.filter(i => i.id === id)
//   // setTodo(t[0].todo)
//   // // let newTodos = todos.filter(item => {
//   // //   return item.id !== id
//   // // })
//   // // setTodos(newTodos)


//   // let index = todos.findIndex(item=>{
//   //       return item.id ==id;
//   //     })
//   //     console.log(index)
//   //     let newTodos = [...todos]
//   //     newTodos


//   const handleDelete = (e, id) => {

//     const isConfirmed = window.confirm("Are you sure you want to delete this todo?");
//     if (isConfirmed) {
//       let newTodos = todos.filter(item => {
//         return item.id !== id
//       })
//       setTodos(newTodos);
//       localStorage.setItem('todos', JSON.stringify(newTodos))

//     }
//   }

//   const handleCheckbox = (e) => {
//     let id = e.target.name;
//     let index = todos.findIndex(todo => todo.id === id);

//     let newTodos = [...todos]
//     newTodos[index].isCompleted = !newTodos[index].isCompleted;
//     setTodos(newTodos);
//     localStorage.setItem('todos', JSON.stringify(newTodos))
//   }

//   return (
//     <>

//       <Navbar />
//       <div className="container mx-auto  my-5 p-5 bg-violet-100 rounded-xl min-h-[80vh] w-1/2" >
//         <div className="addTodo">
//           <h2 className='text-xl font-bold'>Add a todo</h2>
//           <input onChange={(e) => { setTodo(e.target.value) }} value={todo} type="text" className='min-w-[80vh] h-10 rounded-md px-2' placeholder='Enter Your Task Here' required />
//           <button type="button" className="text-white px-3 my-3 bg-violet-500 hover:bg-violet-900 py-1 mx-2 rounded-md font-bold" onClick={handleAdd}>Save</button>
//         </div>
//         <div className=''>
//           <input onChange={toggleFinished} className='m-1' type="checkbox" checked={showCompleted} /> Show Completed </div>

//         <h1 className='text-xl font-bold my-5'>Your To-do's</h1>


//         {/* <div className="todos">
//           {todos.length === 0 && <div className='m-5'>
//             No TODO's To Display
//           </div>}
//          (showCompleted || !item.isCompleted) && {todos.map((item, index) => (
//             <div className="todo my-2 w-ful flex justify-between" key={index}>
//               <div className='flex'>
//                 <input className='mx-4' name={item.id} onChange={handleCheckbox} type="checkbox" />
//                 <div className={item.isCompleted ? "line-through" : ''}>
//                   {item.todo}
//                 </div>
//               </div>

//               <div className="buttons flex h-full p-0">
//                 <button onClick={() => handleEdit(item.id)} className='text-white px-3 bg-violet-500 hover:bg-violet-900 py-1 mx-2 rounded-md font-bold'>Edit</button>
//                 <button onClick={(e) => handleDelete(e, item.id)} className='text-white px-3 bg-violet-500 hover:bg-violet-900 py-1 mx-2 rounded-md font-bold'>Delete</button>
//               </div>
//             </div>
//           ))}

//         </div> */}
//         <div className="todos">
//           {todos.length === 0 && <div className='m-5'>No TODO's To Display</div>}
//           {todos
//             .filter((item) => showCompleted || !item.isCompleted)  // Filter todos based on showCompleted
//             .map((item, index) => (
//               <div className="todo my-2 w-full flex justify-between" key={index}>
//                 <div className='flex'>
//                   <input className='mx-4' name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
//                   <div className={item.isCompleted ? "line-through" : ''}>
//                     {item.todo}
//                   </div>
//                 </div>

//                 <div className="buttons flex h-full p-0">
//                   <button onClick={() => handleEdit(item.id)} className='text-white px-3 bg-violet-500 hover:bg-violet-900 py-1 mx-2 rounded-md font-bold'>Edit</button>
//                   <button onClick={(e) => handleDelete(e, item.id)} className='text-white px-3 bg-violet-500 hover:bg-violet-900 py-1 mx-2 rounded-md font-bold'>Delete</button>
//                 </div>
//               </div>
//             ))}
//         </div>


//       </div>

//     </>
//   )
// }

// export default App



