import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todo() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    // State for handling the editing of todos
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEditClick = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    const handleSaveClick = () => {
        if (editText.trim()) { 
            dispatch(updateTodo({ id: editId, text: editText }));
            setEditId(null); // Reset editing state
            setEditText('');
        }
    };

    const handleCancelClick = () => {
        setEditId(null); // Reset editing state
        setEditText('');
    };

    return (
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Todos</h1>
            <ul className="space-y-4">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-lg"
                    >
                        {editId === todo.id ? (
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="border border-gray-300 rounded px-2 py-1"
                                />
                                <button
                                    onClick={handleSaveClick}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleCancelClick}
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <>
                                <span className="text-lg">{todo.text}</span>
                                <div className="space-x-2">
                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                    >
                                        ❌
                                    </button>
                                    <button
                                        onClick={() => handleEditClick(todo.id, todo.text)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                                    >
                                        ✒️
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeTodo, updateTodo } from '../features/todo/todoSlice';
// import AddTodo from './AddTodo';

// function Todo() {
//     const todos = useSelector(state => state.todos);
//     const dispatch = useDispatch();

//     const handleUpdate = (id, currentText) => {
//         // const newText = prompt('Enter new text:', currentText);
        

//         if (newText && newText.trim()) { // Check if the input is not empty
//             dispatch(updateTodo({ id, text: newText }));
//         }
//     };

//     return (
//         <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
//             <h1 className="text-3xl font-bold mb-6">Todos</h1>
//             <ul className="space-y-4">
//                 {todos.map(todo => (
//                     <li
//                         key={todo.id}
//                         className="flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-lg"
//                     >
//                         <span className="text-lg">{todo.text}</span>
//                         <div className="space-x-2">
//                             <button
//                                 onClick={() => dispatch(removeTodo(todo.id))}
//                                 className="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-900 transition"
//                             >
//                                 ❌
//                             </button>
//                             <button
//                                 onClick={() => handleUpdate(todo.id, todo.text)}
//                                 className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//                             >
//                                 ✒️
//                             </button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Todo;
