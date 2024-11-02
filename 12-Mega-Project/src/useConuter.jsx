import React, { useState } from 'react'

function useConuter() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const dec = () => {
        // count = count - 1
        setCount(count - 1)
    }

    return [count,increment,dec]
}

export default useConuter
