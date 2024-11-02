import React from "react";
import useCounter from "./useCounter";

function Counter(){
    const { count, increment, decrement, reset } = useCounter

    return (
    <>
        <h2>{count}:{typeof(count)}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
)
}


export default Counter
