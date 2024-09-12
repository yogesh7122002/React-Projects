import React, { useEffect, useState } from 'react'

function MyTest() {
    const [data, setData] = useState(null)
    let fetchData = async () => {
        let Promice = await fetch("https://jsonplaceholder.typicode.com/todos/")
        Promice = await Promice.json();
        setData(Promice)
        // console.log(typeof (Promice))
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {data ? (

                <div>
                    <h1>Fetched Data From API</h1>
                    {
                        data.map((item) => (
                            <ul key={item.id}>
                                <li>{item.id}</li>
                                <li>{item.title}</li>
                            </ul>))
                    }
                </div>




            ) : <>Loading...</>}
        </>


    )
}

export default MyTest
