import { useState } from 'react'
import './App.css'

function App() {
  // const [user, setuser] = useState("")
  // const [value, setvalue] = useState('')
  const [input, setInput] = useState('')
  const [users, setUser] = useState([])


  function handle() {
    if (input.trim() === '') return;
    setUser([...users, { input, gift: null }])
    setInput('')
    console.log(users)
  }
  function assignGift(){
    // generate the random gift from the available gifts
    // steps
    // generate random
    // itterate over the present users array and assign the values to the assigned gift value
    // This function can be used for shuffle gift just reassign the gifts

  }

  return (
    <>
      <div className='main-Div'>
        <p>Diwali Gift Exchange</p>
        <input value={input} onChange={(e) => setInput(e.target.value)} required type="text" />
        <button onClick={handle} type='submit'> Add User </button>
      </div>



      <div className='list-of-users'>
        <p>Inside list display:</p>
        <ul>
          {users.map((user, index) => (
            <li key={index}>Name: {user.input} Assigned gift:  {user.gift} </li>
          ))}
        </ul>

        {users.length > 0 ? (<>
          <button onClick={assignGift}>assign gift</button>
          <button type="">Shuffle gifts</button>
          <button type="">Reset</button>
        </>
        ) : (<></>)}

      </div>

    </>
  )
}

export default App


{/* <div className='list-of-users'>
        <p>inside list</p>
        <ul>
          {users.map((number,index)=>
            <li key={index}>{number.input}</li> 
          )}
          </ul>
      </div> */}
