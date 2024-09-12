import React from 'react'

function Navbar() {
    return (
        <nav className='flex justify-between bg-slate-400 p-3'>


            <div className="logo">
                <span className='font-bold text-xl mx-9 '>DailyDoer </span>
            </div>
            <ul className='flex gap-5 mx-9 font-semibold'>
                <li className='cursor-pointer hover:font-bold transition-all text-xl'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all text-xl'>Your Task</li>
            </ul>

        </nav>
    )
}

export default Navbar
