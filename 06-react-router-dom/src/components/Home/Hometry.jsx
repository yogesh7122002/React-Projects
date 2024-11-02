import React from 'react'

function Hometry() {
    return (
        <>

            {/* Upper Section */}
            <div class="flex flex-col mx-10 my-5 md:flex-row items-center bg-gradient-to-r from-orange-500 to-orange-800 p-8 rounded-lg shadow-lg">
                {/* <!-- Image Section --> */}
                <div class="w-full md:w-1/2 flex justify-center">
                    <img
                        className="w-full max-w-lg sm:max-w-none sm:w-[30rem] transform rotate-6 sm:rotate-0 rounded-2xl  shadow-2xl"
                        src={dev}
                        alt="Programmer"
                    />
                </div>

                {/* <!-- Content Section --> */}

                <div class="w-full md:w-1/2 p-6 text-white">
                    <h5 className="">Hello Folks</h5>
                    <h1 class="text-4xl font-bold mb-4">I'm Yogesh</h1>
                    <p class="text-lg mb-6">
                        A skilled Computer Engineer with experience in Python, DataStructures, Java, C++, and web development.</p>
                    <button
                        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition duration-300 ease-in-out"
                    // onClick={() => window.location.href = 'https://github.com/yogesh7122002'}
                    >
                        <a href="https://github.com/yogesh7122002"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer">Visit GitHub</a>
                    </button>
                </div>
            </div>

            <br />

            {/* Experience Section */}
            <div className="m-4">
                <h4 className="text-center m-4 my-5 font-bold text-3xl">Experience</h4>
                <br />
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="bg-gradient-to-b from-gray-500 to-gray-700 p-8 rounded-lg shadow-lg text-white max-w-lg mx-4 mb-4 md:mb-0">
                        <h2 className="text-center font-bold text-3xl mb-6">Internship</h2>

                        <div className="flex justify-center mb-6">
                            <img className="w-20 h-20 rounded-full shadow-md" src="https://evertz.com/img/evertz/evertz.logo.svg" alt="Evertz Logo" />
                        </div>

                        <a href="https://drive.google.com/file/d/1w0ylGLJt8TKAyV1HcaWrDZTrdNtNcaLD/view?usp=sharing">
                            <h2 className="text-center font-semibold text-xl">Project Intern at Evertz Microsystems</h2>
                        </a>
                        <p className="text-center mt-4 text-gray-300">
                            Worked on cutting-edge projects, contributing to system development, Task Automation and optimization as part of a dynamic engineering team.
                        </p>
                        <h2 className="text-center mt-4 text-gray-300">Tech Stack:</h2>
                        <h3 className="text-center text-xl font-bold mt-4 text-gray-300">Linux, Python, JavaScript, Json, SQL</h3>
                    </div>
                    <div className="bg-gradient-to-b from-gray-500 to-gray-700 p-8 rounded-lg shadow-lg text-white max-w-lg mx-4">
                        <h2 className="text-center font-bold text-3xl mb-6">Internship</h2>

                        <div className="flex justify-center mb-6">
                            <img className="w-20 h-20 rounded-full shadow-md" src="https://etsociety.org/wp-content/uploads/2022/07/membership-icon-2-600x600-1.png" alt="IITB Logo" />
                        </div>

                        <a href="https://credsverse.com/credentials/3b8766ea-82c6-458a-950a-b613534c902e">
                            <h2 className="text-center font-semibold text-xl">Research Intern AT IITB</h2>
                        </a>
                        <p className="text-center mt-4 text-gray-300">
                            Worked on cutting-edge projects, contributing to system development, Task Automation and optimization as part of a dynamic engineering team.
                        </p>
                        <h2 className="text-center mt-4 text-gray-300">Tech Stack:</h2>
                        <h3 className="text-center text-xl font-bold mt-4 text-gray-300">Linux, Python, JavaScript, Json, SQL</h3>
                    </div>
                </div>
            </div>

            <br />

            {/* Project Section */}
            <div>
                <h1 className='font-bold text-2xl text-center'>Projects</h1>
                <br />

                <div className='flex flex-wrap justify-center'>
                    {projects.map((project) => (
                        <div key={project.id} className="m-4 flex-none w-full sm:w-1/3 lg:w-1/4">
                            <div className="bg-gradient-to-b from-gray-500 to-gray-700 p-6 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="flex justify-center mb-4">
                                    <img
                                        className="w-32 h-32 rounded-sm shadow-md transition-transform transform hover:scale-110"
                                        src={project.image}
                                        alt={project.mainHeading}
                                    />
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
            </div>
            <br />

            {/* Coading Profiles And Code Section  */}
            <div>
                {/* Heading For Coding Profile Section */}
                <div className="w-1/3 mx-auto py-3 rounded-md bg-slate-400">
                    <h2 className="text-center text-2xl font-bold">
                        Coding Profile Section
                    </h2>
                </div>

                <br />

                <div className="flex justify-center m-4">
                    <div className="box flex bg-slate-600 w-1/3 m-4 rounded-md">
                        <div className="w-1/2 m-2">
                            <img className="w-32 h-32 rounded-md" src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" alt="Coding Platform Icon" />
                        </div>
                        <div className="w-1/2 m-2">
                            <h2 className="text-center font-bold">Leetcode</h2>
                            <h4>Username: </h4>
                            <h5>Problems Solved:</h5>
                        </div>
                    </div>
                    <div className="box flex bg-slate-600 w-1/3 m-4 rounded-md">
                        <div className="w-1/2 m-2">
                            <img className="w-32 h-32 rounded-md" src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" alt="Coding Platform Icon" />
                        </div>
                        <div className="w-1/2 m-2">
                            <h2 className="text-center font-bold">Leetcode</h2>
                            <h4>Username: </h4>
                            <h5>Problems Solved:</h5>
                        </div>
                    </div>
                    <div className="box flex bg-slate-600 w-1/3 m-4 rounded-md">
                        <div className="w-1/2 m-2">
                            <img className="w-32 h-32 rounded-md" src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" alt="Coding Platform Icon" />
                        </div>
                        <div className="w-1/2 m-2">
                            <h2 className="text-center font-bold">Leetcode</h2>
                            <h4>Username: </h4>
                            <h5>Problems Solved:</h5>
                        </div>
                    </div>
                    <div className="box flex bg-slate-600 w-1/3 m-4 rounded-md">
                        <div className="w-1/2 m-2">
                            <img className="w-32 h-32 rounded-md" src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" alt="Coding Platform Icon" />
                        </div>
                        <div className="w-1/2 m-2">
                            <h2 className="text-center font-bold">Leetcode</h2>
                            <h4>Username: </h4>
                            <h5>Problems Solved:</h5>
                        </div>
                    </div>
                </div>




            </div>


        </>

    )
}

export default Hometry
