import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <h1 className='bg-black p-4 rounded-xl'>The Colour Is Black</h1> */}

      

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img className='m-1 rounded-xl mb-4' src='https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
    <svg class="w-7 h-7  text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">A Small Act of Kindness Can Make a Big Difference! </h5>
    </a>

    
<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">How Your Donation Helps:</h2>
<ol class="max-w-md text-gray-500 list-decimal dark:text-gray-400 pl-0 list-inside">
        <li>
            <span class="font-semibold text-gray-900 dark:text-white">$10: Provides food and shelter for one dog for a week.</span>  <span class="font-semibold text-gray-900 dark:text-white"></span> 
        </li>
        <li>
            <span class="font-semibold text-gray-900 dark:text-white">$25: Covers medical check-ups and vaccinations.</span>

            </li>
        <li>
            <span class="font-semibold text-gray-900 dark:text-white">$50: Supports rescue missions and rehabilitation efforts.</span> 
        </li>
    </ol>

    <p class="mb-3 font-bold text-white dark:text-gray-400">Your small help can bring a big change in the lives of these loving animals.</p>
    <a href="https://google.com" target='_blank' class="inline-flex font-medium items-center text-blue-600 hover:underline"> Click Here to Help
        
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>

       
    </>
  )
}

export default App
