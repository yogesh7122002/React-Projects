import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <form>
            <fieldset>
                <legend>Register</legend>
                <label htmlFor="fname">Name</label>
                <input type="text" name="fname" required placeholder="Enter Your Name" />

                <label htmlFor="email">Email</label>
                <input required type="email" name="email" placeholder="Enter Your Email" />

                <label htmlFor="password">Password</label>
                <input required type="password" name="password" placeholder="Enter Password" />

                <button id="form-submit" className="btn btn-success" type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </fieldset>
        </form>
    );
}

export default Signup;
