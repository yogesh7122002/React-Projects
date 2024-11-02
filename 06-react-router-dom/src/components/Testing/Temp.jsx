import React, { useEffect, useState } from 'react'
function Temp() {

    // const [leetCode, setLeetCode] = useState('Fetching...');
    // const [gfg, setGfg] = useState('Fetching...');

    // // useEffect(() => {
    // //     const fetchLeetCodeData = async () => {
    // //         try {
    // //             const response = await fetch("https://leetcode-stats-api.herokuapp.com/Yogesh_Deshmane");
    // //             if (!response.ok) {
    // //                 throw new Error(`HTTP error! Status: ${response.status}`);
    // //             }
    // //             const data = await response.json();
    // //             setLeetCode(data);
    // //             console.log(data);
    // //         } catch (err) {
    // //             console.error("Error fetching LeetCode data:", err);
    // //             setLeetCode('Error fetching data');
    // //         }
    // //     };

    // //     fetchLeetCodeData();
    // // }, []);


    //     fetch('https://geeks-for-geeks-api.vercel.app/xender00')
    //     .then(respose=>respose.json())
    //     .then(data=>console.log("data : ",data))
    //     .catch(err=>console.error("error",err))


    





    return (
        <>

            {/* Image */}
            {/* Main Heading */}
            {/* Subheading */}
            {/* Bullet Points */}

            {/* <div className='flex flex-row w-100'>
                <div className="m-4 flex-1">
                    <div className="bg-gradient-to-b from-gray-500 to-gray-700 p-6 rounded-lg shadow-lg text-white max-w-sm mx-auto">
                        <div className="flex justify-center mb-4">
                            <img className="w-64 h-32 rounded-sm shadow-md" src="https://via.placeholder.com/150" alt="Sample" />
                        </div>
                        <h2 className="text-center font-bold text-2xl mb-2">Main Heading</h2>
                        <h3 className="text-start font-semibold text-lg mb-4">Subheading</h3>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>Bullet Point 1</li>
                            <li>Bullet Point 2</li>
                            <li>Bullet Point 3</li>
                            <li>Bullet Point 4</li>
                        </ul>
                        <br />
                        <a href="">Click To View</a>

                    </div>
                </div>
                <div className="m-4 flex-1">
                    <div className="bg-gradient-to-b from-gray-500 to-gray-700 p-6 rounded-lg shadow-lg text-white max-w-sm mx-auto">

                        <div className="flex justify-center mb-4">
                            <img className="w-64 h-32 rounded-sm shadow-md" src="https://via.placeholder.com/150" alt="Sample" />
                        </div>


                        <h2 className="text-center font-bold text-2xl mb-2">Main Heading</h2>
                        <h3 className="text-start font-semibold text-lg mb-4">Subheading</h3>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>Bullet Point 1</li>
                            <li>Bullet Point 2</li>
                            <li>Bullet Point 3</li>
                            <li>Bullet Point 4</li>
                        </ul>
                        <br />
                        <a href="">Click To View</a>

                    </div>
                </div>
                <div className="m-4 flex-1">
                    <div className="bg-gradient-to-b from-gray-500 to-gray-700 p-6 rounded-lg shadow-lg text-white max-w-sm mx-auto">
                        <div className="flex justify-center mb-4">
                            <img className="w-64 h-32 rounded-sm shadow-md" src="https://via.placeholder.com/150" alt="Sample" />
                        </div>
                        <h2 className="text-center font-bold text-2xl mb-2">Main Heading</h2>
                        <h3 className="text-start font-semibold text-lg mb-4">Subheading</h3>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>Bullet Point 1</li>
                            <li>Bullet Point 2</li>
                            <li>Bullet Point 3</li>
                            <li>Bullet Point 4</li>
                        </ul>
                        <br />
                        <a href="">Click To View</a>

                    </div>
                </div>
            </div> */}
            {/* <div>
                <h1 className='font-bold text-2xl text-center'>Projects</h1>

                <div className='flex flex-wrap justify-center'>
                    {projects.map((project) => (
                        <div key={project.id} className="m-4 flex-none w-full sm:w-1/3 lg:w-1/4">
                            <div className="bg-gradient-to-b from-gray-500 to-gray-700 p-6 rounded-lg shadow-lg text-white">
                                <div className="flex justify-center mb-4">
                                    <img className="w-64 h-32 rounded-sm shadow-md" src={project.image} alt={project.mainHeading} />
                                </div>
                                <h2 className="text-center font-bold text-2xl mb-2">{project.mainHeading}</h2>
                                <h3 className="text-start font-semibold text-lg mb-4">{project.subheading}</h3>
                                <ul className="list-disc list-inside text-gray-300">
                                    {project.bulletPoints.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                <br />
                                <a href={project.link} className="text-orange-400 hover:underline">Click To View</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div>
                <h1>LeetCode Stats</h1>
                <pre>{JSON.stringify(leetCode, null, 2)}</pre>
            </div>

        </>

    )
}

export default Temp
