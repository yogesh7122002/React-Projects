import React, { useEffect, useState } from "react"
function NewMyTest() {
    const [user, setUser] = useState(null)
    let getData = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/")
        response = await response.json()
        setUser(response)
        console.log(response)
    }
    useEffect(() => {
        getData();
    }, [])
    return (<>
        {user ? (
            <>
                <h1>Fetched data</h1>
                {
                    user.map((item) => (
                        <ul key={item.id}>
                            <li>{item.id}</li>
                            <li>{item.title}</li>
                        </ul>
                        // console.log(item.id)

                    ))}
            </>) : (<>
                Loading...</>)

        }
    </>)

}



export default NewMyTest



//     < div >
//     <h1>fetched data From api </h1>
// {
//     user.map((item) => {
//         <ul key={item.id}>
//             <li>{item}</li>
//             <li>{ }</li>
//             <li>{ }</li>
//             <li>{ }</li>
//         </ul>

//     })
// }

//             </div >