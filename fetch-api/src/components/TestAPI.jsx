import React, { useState, useEffect } from 'react';

function TestAPI() {
    const [user, setUser] = useState(null);  // Since you're fetching a single object

    const getUser = async () => {
        // try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        response = await response.json();
        console.log(typeof (response));
        setUser(response);  // Set the fetched data to state
        // } catch (error) {
        //     console.error('Error fetching data:', error);
        // }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            {console.log("User:", user)}



            {
                user ? (<div><h1>Fetched Data</h1>
                    {user.map((item) => (
                        <>
                            <ul key={item.id}>
                                {/*  "userId": 1,
                                    "id": 1,
                                    "title": "delectus aut autem",
                                    "completed": false */}
                                <li>UserId : {item.userId}</li>
                                <li>Sample Id: {item.id}</li>
                                <li>{item.title}</li>
                                <li><strong>Profile isCompeted : </strong>{item.completed ? "Yes" : "No"}</li>
                            </ul>
                            <br /><br />

                        </>
                    ))}
                    <ul>

                    </ul>
                </div>) : (<p>Loading....</p>)
                // user ? (
                //     <ul>
                //         {user.map((item) => (
                //             <li key={item.id}>
                //                 <p>User ID: {item.userId}</p>
                //                 <p>ID: {item.id}</p>
                //                 <p>Title: {item.title}</p>
                //                 <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
                //             </li>
                //         ))}
                //     </ul>
                // ) : (
                //     <p>Loading...</p>
                // )
            }
        </div>
    );
}

export default TestAPI;

{/*                     <h1>Fetched Data</h1>
                    {/* {user ? (



                <ul>
                    <li>User ID: {item.userId}</li>
                    <li>ID: {user.id}</li>
                    <li>Title: {user.title}</li>
                    <li>Completed: {user.completed ? "Yes" : "No"}</li>
                </ul>}
            ) : (
            <p>Loading...</p>
            )} */}
{/* </div>} */ }