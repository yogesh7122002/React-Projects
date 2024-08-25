import { useState } from 'react'

import './App.css'

import ColourChange from './ColourChange'

function App() {
  // const [count, setCount] = useState(0)
  const [colour, setColour] = useState("olive")

  return (
    <>
    <ColourChange/>

      {/* <div className='w-full h-screen duration-200' style={{ backgroundColor: colour }}>

        <div className='fixed bottom-12 left-0 right-0 flex justify-center inset-x-0 px-2'>



          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('red')} style={{ backgroundColor: 'red' }}>Red</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('blue')} style={{ backgroundColor: 'blue' }}>Blue</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('green')} style={{ backgroundColor: 'green' }}>Green</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('orange')} style={{ backgroundColor: 'orange' }}>Orange</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('yellow')} style={{ backgroundColor: 'yellow' }}>Yellow</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('pink')} style={{ backgroundColor: 'pink' }}>Pink</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('purple')} style={{ backgroundColor: 'purple' }}>Purple</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('brown')} style={{ backgroundColor: 'brown' }}>Brown</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('cyan')} style={{ backgroundColor: 'cyan' }}>Cyan</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('magenta')} style={{ backgroundColor: 'magenta' }}>Magenta</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('lime')} style={{ backgroundColor: 'lime' }}>Lime</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('teal')} style={{ backgroundColor: 'teal' }}>Teal</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('navy')} style={{ backgroundColor: 'navy' }}>Navy</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('gold')} style={{ backgroundColor: 'gold' }}>Gold</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('silver')} style={{ backgroundColor: 'silver' }}>Silver</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('coral')} style={{ backgroundColor: 'coral' }}>Coral</button>
          <button className='px-4 py-2 rounded-md m-0.5' onClick={() => setColour('khaki')} style={{ backgroundColor: 'khaki' }}>Khaki</button>


        </div>

      </div > */}

    </>
  )
}

export default App



{/* <div className='flex flex-wrap justify-center gap-3 bg-white p-2 rounded-md' > */ }
{/*<button className=' px-4 py-2 rounded-md' onClick={()=>setColour("red")} style={{backgroundColor:"red"}}>Red</button>
          <button className=' px-4 py-2 rounded-md' onClick={()=>setColour("blue")}  style={{backgroundColor:"blue"}}>Blue</button>
          <button className=' px-4 py-2 rounded-md' onClick={()=>setColour("green")}  style={{backgroundColor:"green"}}>Green</button>
          <button className=' px-4 py-2 rounded-md' onClick={()=>setColour("orange")} style={{backgroundColor:"orange"}}>Orange</button>
          <button className=' px-4 py-2 rounded-md' onClick={()=>setColour("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
          <button className=' px-4 py-2 rounded-md' onClick={()=>setColour("pink")} style={{backgroundColor:"pink"}}>Pink</button> */}