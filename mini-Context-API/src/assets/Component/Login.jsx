// import React, { useState, useContext } from 'react'
// import userContext from '../../context/userContext'

// function Login() {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")

//     const { setuser } = useContext(userContext);


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         {setuser({ username, password })}
//     }
//     return (
//         <div className='mainDiv'>

//             <h3>Log In Form</h3>
//             <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' /> <br />
//             <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' /><br /><br /><br />
//             <button onClick={(e) => handleSubmit(e)}>Submit</button>
//         </div>
//     )
// }

// export default Login


import React, { useState, useContext } from 'react';
import userContext from '../../context/userContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { setuser } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === "" || password.trim() === "") {
            setError("Username and password cannot be blank.");
            return;
        }
        else {
            setuser({ username, password });
            setUsername("")
            setPassword("")
        }

    };

    return (
        <div className="mainDiv">
            <h3>Log In Form</h3>
            <input
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"

            />
            <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"

            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
