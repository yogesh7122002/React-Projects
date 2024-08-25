import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <form>
            <fieldset>
                <legend>Login</legend>
                <label htmlFor="email">Email</label>
                <input required type="email" name="email" placeholder="Enter Your Email" />

                <label htmlFor="password">Password</label>
                <input required type="password" name="password" placeholder="Enter Password" />

                <button id="form-submit" className="btn btn-success" type="submit">Login</button>
                <p>Don't have an account? <Link to="/">Register</Link></p>
            </fieldset>
        </form>
    );
}

export default Login;



// import React from 'react';
// import "./Login.css";
// import { Link } from 'react-router-dom';

// export default function Login() {
//     return (
//         <div>
//             <form action="">
//                 <fieldset>
//                     <legend>Login:</legend>

//                     <label htmlFor="email">Email</label>
//                     <input required type="email" name="email" placeholder='Enter Your Email' /><br />

//                     <label htmlFor="password">Password</label>
//                     <input required type="password" name="password" placeholder='Enter Password' /><br />

//                     <button id='form-submit' className="btn btn-success" type='submit'>Login</button>
//                     <p>Don't have an account? <Link to="/">Register</Link></p>
//                 </fieldset>
//             </form>
//         </div>
//     );
// }


// import React from 'react'
// import "./Login.css"
// import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'

// export default function Login() {
//     return (
//         <div>
//             <form action="">
//                 <fieldset>
//                     <legend>Login:</legend>

//                     <label htmlFor="email">Email</label>
//                     <input required type="email" name="email" placeholder='Enter Your Email' /><br />

//                     <label htmlFor="password">Password</label>
//                     <input required type="password" name="password" placeholder='Enter Password' /><br />

//                     <Link to="/login" id='form-submit' className="btn btn-success" type='submit' >Login</Link>
//                     <p>Don't have an account? <a href="#">Register</a></p>
//                 </fieldset>
//             </form>
//         </div>
//     )
// }
