import React from "react";
import { Link } from "react-router-dom";
import dev from "../assets/dev.png"
export default function Home() {
    return (
        <>

            {/* Upper Section */}
            <div class="flex flex-col mx-10 my-5 md:flex-row items-center bg-gradient-to-r from-orange-500 to-orange-800 p-8 rounded-lg shadow-lg">
                {/* <!-- Image Section --> */}
                <div class="w-full md:w-1/2 flex justify-center">
                    <img
                        className="w-full max-w-lg sm:max-w-none sm:w-[30rem] transform rotate-6 sm:rotate-0 rounded-2xl  shadow-2xl"
                        src={dev}
                        alt="Your Image Description"
                    />
                </div>

                {/* <!-- Content Section --> */}

                <div class="w-full md:w-1/2 p-6 text-white">
                    <h5 className="">Hello Folks</h5>
                    <h1 class="text-4xl font-bold mb-4">I'm Yogesh</h1>
                    <p class="text-lg mb-6">
                        A skilled Computer Engineer with experience in Python, Java, C++, and web development.</p>
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

            {/* Experience Section */}
            <div className="m-4">
                <h4 className="text-center m-4 font-bold text-3xl">Experience</h4>

                <div className="bg-gradient-to-b from-gray-500 to-gray-700 p-8 rounded-lg shadow-lg text-white max-w-lg mx-auto">
                    <h2 className="text-center font-bold text-3xl mb-6">Internship</h2>

                    <div className="flex justify-center mb-6">
                        <img className="w-20 h-20 rounded-full shadow-md" src="https://evertz.com/img/evertz/evertz.logo.svg" alt="Evertz Logo" />
                    </div>

                    <h2 className="text-center font-semibold text-xl">Project Intern at Evertz Microsystems</h2>

                    <p className="text-center mt-4 text-gray-300">
                        Worked on cutting-edge projects, contributing to system development, Task Automation and optimization as part of a dynamic engineering team.
                    </p>
                    <h2 className="text-center mt-4 text-gray-300">Tech Stack:</h2><h3 className="text-center text-xl font-bold mt-4 text-gray-300">Linux, Python, JavaScript, Json, SQL</h3>
                </div>
            </div>


{/* Project Section */}
            <div className="m-4">
                <h4 className="text-center m-4 font-bold text-3xl">Projects</h4>
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
                    <img className="w-full h-48 object-cover" src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/4d/a5/444da51c-432d-b0e6-0435-f097b0531d9a/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/434x0w.webp" alt="Project Image" />
                    <div className="px-6 py-4">
                        <h2 className="font-bold text-xl mb-2">Project Title</h2>
                        <p className="text-gray-700 text-base">
                            This is a brief description of the project. Explain the purpose, features, and any key details that make the project unique or interesting.
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="block text-gray-600 text-sm">Tech Stack: HTML, CSS, JavaScript, React</span>
                    </div>
                </div>


            </div>

        </>


    );
}
//   <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
//             <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 py-10 bg-gradient-to-r from-orange-500 to-red-600">
//                 <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
//                     <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
//                         <h6 className="mr-4 ">Hello I'm</h6>
//                         <h2 className="text-2xl font-bold sm:text-4xl text-white leading-tight">
//                             Yogesh Deshmane
//                             <span className="block sm:hidden mt-2 text-3xl">Lorem Ipsum</span>
//                             <span className="hidden sm:block mt-2 text-4xl">Lorem Ipsum</span>
//                         </h2>

//                         <Link
//                             className="inline-flex items-center px-6 py-3 font-medium bg-white text-orange-700 rounded-lg hover:bg-gray-100 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
//                             to="/"
//                         >
//                             <svg
//                                 fill="currentColor"
//                                 width="24"
//                                 height="24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 className="mr-2"
//                             >
//                                 <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
//                             </svg>
//                             Download Now
//                         </Link>
//                     </div>
//                 </div>

//                 {/* <div className="absolute inset-0 w-full h-full sm:my-20 sm:pt-1 pt-12">
//                     <img
//                         className="w-full max-w-sm mx-auto sm:max-w-none sm:w-96 transform rotate-6 sm:rotate-0"
//                         src="https://i.ibb.co/5BCcDYB/Remote2.png"
//                         alt="image1"
//                     />
//                 </div> */}
//             </aside>

//             <div className="grid place-items-center sm:mt-20 mt-10">
//                 <img
//                     className="sm:w-96 w-48 transform hover:scale-105 transition-transform duration-300"
//                     src="https://i.ibb.co/2M7rtLk/Remote1.png"
//                     alt="image2"
//                 />
//             </div>

//             <h1 className="text-center text-2xl sm:text-5xl py-10 font-semibold text-gray-800">
//                 Let's Go
//             </h1>
//         </div>
