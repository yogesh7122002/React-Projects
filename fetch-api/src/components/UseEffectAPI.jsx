import React, { useEffect, useState } from 'react'

function UseEffectAPI() {
    const [user, setUser] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setUser(data);
        console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2 className='text-2xl text-center text-blue-300'>List Of Users</h2>
            <div className="flex flex-wrap justify-center">
                {
                    user.map(item => (
                        <div key={item.id} className="mx-7 my-7 max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 border border-gray-300 flex-shrink-0">
                            <div className="flex items-center space-x-4">
                                <img className="w-24 h-24 rounded-full" src={item.avatar_url} alt="Avatar" />
                                <div className="text-left">
                                    <h2 className="text-2xl font-bold text-gray-800">{item.login}</h2>
                                    <p className="text-gray-600">Followers URL: {item.followers_url}</p>
                                </div>
                            </div>
                            <div className="mt-4 text-left">
                                <p className="mt-2 text-gray-700">Repos URL: {item.repos_url}</p>
                                <div className="mt-4 flex justify-start">
                                    <a href={item.html_url} className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
                                        View GitHub Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default UseEffectAPI;





{/* <div className="mx-7 my-7 max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 border border-gray-300 flex-shrink-0">
                    <div className="flex items-center space-x-4">
                        <img className="w-24 h-24 rounded-full" src="https://via.placeholder.com/150" alt="Avatar" />
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-gray-800">User Name</h2>
                            <p className="text-gray-600">@username</p>
                        </div>
                    </div>
                    <div className="mt-4 text-left">
                        <p className="mt-2 text-gray-700">User bio goes here. A short description about the user.</p>
                        <div className="mt-4 flex justify-start">
                            <a href="#" className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
                                View Profile
                            </a>
                        </div>
                    </div>
                </div> */}
{/* <div className="mx-7 my-7 max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 border border-gray-300 flex-shrink-0">
                    <div className="flex items-center space-x-4">
                        <img className="w-24 h-24 rounded-full" src="https://via.placeholder.com/150" alt="Avatar" />
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-gray-800">User Name</h2>
                            <p className="text-gray-600">@username</p>
                        </div>
                    </div>
                    <div className="mt-4 text-left">
                        <p className="mt-2 text-gray-700">User bio goes here. A short description about the user.</p>
                        <div className="mt-4 flex justify-start">
                            <a href="#" className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
                                View Profile
                            </a>
                        </div>
                    </div>
                </div> */}
