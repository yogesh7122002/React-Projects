import { useState } from "react";

function useCounter(initial_value = 0) {
    const [count, setCount] = useState(initial_value)

    const increment = () => setCount((prev) => (prev + 1));
    const decrement = () => setCount((prev) => setCount(prev - 1));
    const reset = () => setCount(initial_value);

    return { count, increment, decrement, reset }

}

export default useCounter