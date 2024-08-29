import React from 'react'
import './App.css'
export default function Password() {


    return (
        <>
        <h1 className='text-white text-4xl font-bold'>Password Generator</h1>

        <div className='main-container'>
        <input type="text" name="password" value="" placeholder="Generated password"/>

        </div>
    </>
    )
}
