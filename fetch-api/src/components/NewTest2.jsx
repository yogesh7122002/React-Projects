

// API LINK Is WRONG SO Data Is Not Fetching
import React, { useEffect, useState } from "react";

function NewTest2() {
    const [data, setData] = useState(null);

    let getData = async () => {
        try {
            let response = await fetch("abd");
            response = await response.json();
            setData(response);
            console.log("Data fetched successfully:", response);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {data ? (
                <>
                    <h2>Data Fetched Successfully</h2>
                    {
                        <div className="flex flex-wrap justify-center">
                            {
                                data.map(item => (
                                    <div key={item.id} className="mx-7 my-7 max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 border border-gray-300 flex-shrink-0">
                                        <div className="flex items-center space-x-4">
                                            <img className="w-24 h-24 rounded-full" src={data.url} alt="Avatar" />
                                            <div className="text-left">
                                                <h2 className="text-2xl font-bold text-gray-800">{item.login}</h2>
                                                <p className="text-gray-600">Title{item.title}</p>
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
                    }
                </>
            ) : (
                <>
                    <p>Loading....</p>
                    <p>Fetching Data From API</p>
                </>
            )}
        </>
    );
}

export default NewTest2;
