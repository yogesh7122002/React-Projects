import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })

    }



    return (
        <div>
            <h2>Log In</h2>
            <input
                value={username}
                onChange={(e) => {
                    setusername(e.target.value)
                }}
                type='text'
                placeholder='Username' /> <br/><br/>
            <input
                value={password}
                onChange={(e) => {
                    setpassword(e.target.value)
                }}
                type='password'
                placeholder='Password' /><br/><br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;





/*


   
    return (
        
    )*/
