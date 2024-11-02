import anim from "../assets/Get in touch.gif";
import web from "../assets/webdev.png";

export default function Contact() {
    return (
        <div className="relative flex items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    {/* Make it a single column layout with full width */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contact Information */}
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <img
                                src={web}
                                alt="Get in Touch Animation"
                                className="w-full h-auto mt-4 rounded-lg shadow-md bg-orange-900"
                                key={new Date().getTime()} // This forces the GIF to reload
                            />
                            <p className="text-lg sm:text-xl font-medium text-gray-600 mt-4">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    Acme Inc, Street, State, Postal Code
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    +44 1234567890
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    info@acme.org
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="p-6 bg-white rounded-lg shadow-lg mt-6">
                            <h2 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">Add Details</h2>
                            <div className="flex flex-col mt-4">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full py-3 px-3 rounded-lg bg-gray-50 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full py-3 px-3 rounded-lg bg-gray-50 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    className="w-full py-3 px-3 rounded-lg bg-gray-50 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="details" className="hidden">
                                    Details
                                </label>
                                <textarea
                                    className="w-full py-3 px-3 row-span-5 rounded-lg bg-gray-50 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    name="details"
                                    id="details"
                                    rows={9}
                                    placeholder="Add Details"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
