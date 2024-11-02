import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import dev from "../assets/dev.png"
export default function Home() {


    const projects = [
        {
            id: 1,
            image: "https://img.freepik.com/free-vector/college-entrance-exam-concept-illustration_114360-28871.jpg?t=st=1729430668~exp=1729434268~hmac=63bbc285993222dba171db38cb292b017df1c294d6bd8357041a9092f1f142dc&w=740", // Leave image empty
            mainHeading: "JEEPrep",
            subheading: "Java | Firebase | Android Studio",
            bulletPoints: [
                "Developed a user-friendly JEE Preparation Android App to assist aspiring engineering students in exam preparation.",
                "Collaborated with a team to design and implement key features of the app, including the Quiz Section, login/sign up process, and subject sections."
            ],
            link: "https://github.com/yogeshdeshmane220/JeeApp"
        },
        {
            id: 2,
            image: "https://img.freepik.com/free-vector/hand-drawn-college-entrance-exam-illustration_23-2150368549.jpg?t=st=1729430702~exp=1729434302~hmac=f46c89feb992395342f8b7fca1318c636e8554832c40e501eef3044f45fa4ef3&w=740",
            mainHeading: "JEEPrep Web App",
            subheading: "Technologies: HTML, CSS, React JS, .NET, C#, MySQL",
            bulletPoints: [
                "Developed a JEE Preparation Web App with secure data storage and user authentication using password hashing and JWT tokens.",
                "Designed an intuitive UI with interactive learning modules and progress tracking.",
                "Curated notes for chapters to simplify revision and boost retention."
            ],
            link: "https://github.com/yogesh7122002/Jee-Prep-Web-App"
        },
        {
            id: 3,
            image: "https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-28016.jpg?t=st=1729430782~exp=1729434382~hmac=25f5f1402ac8ba7ed01b208bfe261c733aa674d38b9c6565ad151e5293071295&w=740",
            mainHeading: "Blog Website (GitHub)",
            subheading: "Python | MySQL | Django | Bootstrap",
            bulletPoints: [
                "Built a responsive blog site with user authentication and post management.",
                "Optimized database schema using Django ORM, with Bootstrap for consistent UI.",
                "Used Git for version control."
            ],
            link: "https://github.com/yogesh7122002/MyBlog-Website-Django"
        },
        {
            id: 4,
            image: "https://i.pinimg.com/736x/75/68/05/75680550fdc2305216ad9014d2b8b8f2.jpg",
            mainHeading: "Myntra Frontend Clone",
            subheading: "Technologies: React | Tailwind CSS",
            bulletPoints: [
                "Developed a responsive e-commerce frontend with product listings, filtering, and a shopping cart.",
                "Managed state using React Redux for efficient item interactions."
            ],
            link: "#"
        },
        {
            id: 5,
            image: "https://img.freepik.com/free-vector/freelance-outsoursing-concept-people-working-remotely-through-internet-idea-jop-independency-free-schedule-time-management-work-efficiency-vector-flat-illustration_613284-1216.jpg?t=st=1729431128~exp=1729434728~hmac=30457ba9907763a15d4986d65c7c793ca38199d7773769ec08ca1b73bd20e073&w=996",
            mainHeading: "Freelance Projects - Website",
            subheading: "Technologies: React | Tailwind CSS",
            bulletPoints: [
                "Completed website development for SharpTrixAi Solutions, focusing on responsiveness and modern design."
            ],
            link: "https://sharptrixai.com/"
        }
    ];

    // useState[leetCode,setleetCode] = useState('Fetching')
    // useState[gfg,setgfg] = useState('fetching')




    // fetch("https://leetcode-stats-api.herokuapp.com/Yogesh_Deshmane")
    //     .then(response => response.json())
    //     .then(data => setleetCode(data))
    //     .then(leetCode=>console.log(leetCode))
    //     .catch(err => console.error("Error", err))
    
    

    // fetch('https://geeks-for-geeks-api.vercel.app/xender00')
    // .then(response=>response.json())
    // .then(data=>setgfg(data))
    // .then(gfg=>console.log(gfg))
    // .catch(err=>console.error("Error",err))


    const [leetCode, setLeetCode] = useState('Fetching...');

    useEffect(() => {
        const fetchLeetCodeData = async () => {
            try {
                const response = await fetch("https://leetcode-stats-api.herokuapp.com/Yogesh_Deshmane");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setLeetCode(data);
                console.log(data); // Log the fetched data
            } catch (err) {
                console.error("Error fetching LeetCode data:", err);
                setLeetCode('Error fetching data');
            }
        };

        fetchLeetCodeData();
    }, []);

    
    




    return (


        <>
            {/* Upper Section */}
            <div className="flex flex-col mx-10 my-5 md:flex-row items-center bg-gradient-to-r from-orange-500 to-orange-800 p-8 rounded-lg shadow-lg">
                {/* <!-- Image Section --> */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        className="w-full max-w-lg sm:max-w-none sm:w-[30rem] transform rotate-6 sm:rotate-0 rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                        src={dev}
                        alt="Programmer"
                    />
                </div>

                {/* <!-- Content Section --> */}
                <div className="w-full md:w-1/2 p-6 text-white">
                    <h5 className="transition-transform duration-300 ease-in-out hover:scale-105">Hello Folks</h5>
                    <h1 className="text-4xl font-bold mb-4 transition-transform duration-300 ease-in-out hover:scale-105">I'm Yogesh</h1>
                    <p className="text-lg mb-6 transition-transform duration-300 ease-in-out hover:scale-105">
                        A skilled Computer Engineer with experience in Python, Data Structures, Java, C++, and web development.
                    </p>
                    <button
                        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:bg-blue-100 hover:scale-110 hover:shadow-lg"
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
                <div className="flex flex-col md:flex-row justify-center items-center">
                    {/* Internship Card 1 */}
                    <div className="bg-gradient-to-b from-gray-500 to-gray-700 p-6 rounded-lg shadow-lg text-white max-w-xs sm:max-w-md md:max-w-lg mx-2 mb-4 transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                        <h2 className="text-center font-bold text-2xl sm:text-3xl mb-4">Internship</h2>
                        <div className="flex justify-center mb-4">
                            <img className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-125" src="https://evertz.com/img/evertz/evertz.logo.svg" alt="Evertz Logo" />
                        </div>
                        <a href="https://drive.google.com/file/d/1w0ylGLJt8TKAyV1HcaWrDZTrdNtNcaLD/view?usp=sharing">
                            <h2 className="text-center font-semibold text-lg sm:text-xl">Project Intern at Evertz Microsystems</h2>
                        </a>
                        <p className="text-center mt-2 text-gray-300">
                            Worked on cutting-edge projects, contributing to system development, task automation, and optimization as part of a dynamic engineering team.
                        </p>
                        <h2 className="text-center mt-2 text-gray-300">Tech Stack:</h2>
                        <h3 className="text-center text-lg sm:text-xl font-bold mt-2 text-gray-300">Linux, Python, JavaScript, JSON, SQL</h3>
                    </div>

                    {/* Internship Card 2 */}
                    <div className="bg-gradient-to-b from-gray-500 to-gray-700 p-6 rounded-lg shadow-lg text-white max-w-xs sm:max-w-md md:max-w-lg mx-2 mb-4 transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                        <h2 className="text-center font-bold text-2xl sm:text-3xl mb-4">Internship</h2>
                        <div className="flex justify-center mb-4">
                            <img className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-125" src="https://etsociety.org/wp-content/uploads/2022/07/membership-icon-2-600x600-1.png" alt="IITB Logo" />
                        </div>
                        <a href="https://credsverse.com/credentials/3b8766ea-82c6-458a-950a-b613534c902e">
                            <h2 className="text-center font-semibold text-lg sm:text-xl">Research Intern at IITB</h2>
                        </a>
                        <p className="text-center mt-2 text-gray-300">
                            Worked on cutting-edge projects, contributing to system development, task automation, and optimization as part of a dynamic engineering team.
                        </p>
                        <h2 className="text-center mt-2 text-gray-300">Tech Stack:</h2>
                        <h3 className="text-center text-lg sm:text-xl font-bold mt-2 text-gray-300">Linux, Python, JavaScript, JSON, SQL</h3>
                    </div>
                </div>
            </div>



            <br />

            {/* Project Section */}
            <div className="m-4">
                <h1 className='font-bold text-2xl text-center'>Projects</h1>
                <br />

                <div className='flex flex-wrap justify-center'>
                    {projects.map((project) => (
                        <div key={project.id} className="m-2 sm:m-4 flex-none w-full sm:w-1/3 md:w-1/4">
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

                <div className="flex flex-wrap justify-center m-4">
                    {/* Column 1 */}
                    <div className="box flex bg-slate-600 w-full sm:w-1/3 m-2 sm:m-4 rounded-md">
                        <div className="w-1/3 m-2">
                            <img className="w-32 h-32 rounded-md" src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" alt="Coding Platform Icon" />
                        </div>
                        <div className="w-2/3 m-2">
                            <h2 className="text-center font-bold mx-4 my-2  ">Leetcode</h2>
                            <h4 className="font-bold">Username: <a href="https://leetcode.com/u/Yogesh_Deshmane/">Yogesh_Deshmane</a></h4>
                            <h5>Problems Solved:{leetCode.totalSolved !== null ? leetCode.totalSolved : "Fetching..."}</h5>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="box flex bg-slate-600 w-full sm:w-1/3 m-2 sm:m-4 rounded-md">
                        <div className="w-1/3 m-2">
                            <img className="w-32 h-32 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwFGq-Ri8z2LvOJMrHAwxAo7C7lIEH0UjfUokMSGjoUD0_LpNZO9asFWugivwmjQZ4oA&usqp=CAU" alt="Coding Platform Icon" />
                        </div>
                        <div className="w-2/3 m-2">
                            <h2 className="text-center font-bold mx-4 my-2  ">GeeksForGeeks</h2>
                            <h4 className="font-bold">Username: <a href="https://www.geeksforgeeks.org/user/xender00/">Xender00</a> </h4>
                            <h5>Problems Solved: 151</h5>
                        </div>
                    </div>


                </div>
            </div>

        </>


    );
}

/*
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

//                 <div className="absolute inset-0 w-full h-full sm:my-20 sm:pt-1 pt-12">
//                     <img
//                         className="w-full max-w-sm mx-auto sm:max-w-none sm:w-96 transform rotate-6 sm:rotate-0"
//                         src="https://i.ibb.co/5BCcDYB/Remote2.png"
//                         alt="image1"
//                     />
//                 </div> 
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


*/