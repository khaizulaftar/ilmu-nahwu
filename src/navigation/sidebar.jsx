import { useState, useEffect } from "react"
import data from '../data/data.json'
import { Link } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger);

function Sidebar({ left, right }) {
    const [isOpen, setIsopen] = useState(true)

    const [isDown0, setIsDown0] = useState(false)
    const [isDown1, setIsDown1] = useState(false)
    const [isDown2, setIsDown2] = useState(false)
    const [isDown3, setIsDown3] = useState(false)
    const [isDown4, setIsDown4] = useState(false)

    useEffect(() => {
        let lastScroll = 1;
        ScrollTrigger.create({
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            onUpdate: (self) => {
                const currentScroll = self.scroll();
                if (currentScroll > lastScroll) {
                    gsap.to('.navdown', { y: 100 });
                } else if (currentScroll < lastScroll) {
                    gsap.to('.navdown', { y: 0 });
                }
                lastScroll = currentScroll;
            }
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])
    return (
        <>

            {/* sidebar */}
            <aside className={`flex flex-col sticky top-0 hidden md:block ${isOpen ? "w-64" : "w-20"} h-screen px-5 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l`} style={{ scrollbarWidth: "thin" }}>
                <div className={`flex ${isOpen ? "justify-between" : "justify-center"}`}>
                    <Link to="/" className={` ${isOpen ? "block" : "hidden"} `}>
                        <img className="w-auto h-7" src="/ID.svg" alt="logo" />
                    </Link>

                    <div className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer" onClick={() => setIsopen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>

                </div>
                <div className="flex flex-col flex-1 mt-6">
                    <nav className="-mx-3 space-y-3 ">
                        <Link to="/" className={`flex ${isOpen ? "" : "justify-center"} items-center px-3 py-2 bg-gray-100 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${isOpen ? "w-5 h-5" : "w-6 h-6"}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className={`mx-2 text-sm font-medium ${isOpen ? "block" : "hidden"}`}>Home</span>
                        </Link>
                        <Link to="https://www.instagram.com/khais1507/profilecard/?igsh=MXFjanJ3Yzc4d2gzaQ==" className={`flex ${isOpen ? "" : "justify-center"} items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${isOpen ? "w-5 h-5" : "w-6 h-6"}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                            <span className={`mx-2 text-sm font-medium ${isOpen ? "block" : "hidden"}`}>Contact</span>
                        </Link>
                        <Link to="https://saweria.co/Khaizulaftar" className={`flex ${isOpen ? "" : "justify-center"} items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${isOpen ? "w-5 h-5" : "w-6 h-6"}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                            </svg>
                            <span className={`mx-2 text-sm font-medium ${isOpen ? "block" : "hidden"}`}>Support</span>
                        </Link>
                    </nav>

                    <hr className={`my-5 ${isOpen ? "block" : "hidden"}`} />
                    <div className={`flex items-center  ${isOpen ? "block" : "hidden"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hash w-5 h-5 text-gray-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 9l14 0" /><path d="M5 15l14 0" /><path d="M11 4l-4 16" /><path d="M17 4l-4 16" /></svg>
                        <span className="font-bold text-gray-600">Bab-Bab</span>
                    </div>

                    <div className={`py-2 ${isOpen ? "block" : "hidden"}`}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-600 w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span className=" text-sm font-medium text-gray-600 mx-2 ">Permulaan</span>
                            <span className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 border rounded-lg cursor-pointer ml-auto" onClick={() => setIsDown0(!isDown0)}>
                                {isDown0 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                }
                            </span>
                        </div>

                        <nav className={`my-3 ${isDown0 ? "block" : "hidden"}`}>
                            {data.slice(0, 5).map((value, index) => (
                                <Link to={`/${value.nama}`} key={index} className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                    <div className="flex items-center gap-x-2 ">
                                        <span className={`w-2 h-2 rounded-full bg-[${value.bg}]`}></span>
                                        <span>{value.nama}</span>
                                    </div>
                                </Link>
                            ))
                            }
                        </nav>
                    </div>

                    <div className={`py-2 ${isOpen ? "block" : "hidden"}`}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-600 w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span className=" text-sm font-medium text-gray-600 mx-2">Bab Rofa`</span>
                            <span className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 border rounded-lg cursor-pointer ml-auto" onClick={() => setIsDown1(!isDown1)}>
                                {isDown1 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                }
                            </span>
                        </div>

                        <nav className={` my-3 ${isDown1 ? "block" : "hidden"}`}>
                            {data.slice(5, 10).map((value, index) => (
                                <Link to={`/${value.nama}`} key={index} className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                    <div className="flex items-center gap-x-2 ">
                                        <span className={`w-2 h-2 rounded-full bg-[${value.bg}]`}></span>
                                        <span>{value.nama}</span>
                                    </div>
                                </Link>
                            ))
                            }
                        </nav>
                    </div>

                    <div className={`py-2 ${isOpen ? "block" : "hidden"}`}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-600 w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span className=" text-sm font-medium text-gray-600 mx-2">Yang Mengikut</span>
                            <span className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 border rounded-lg cursor-pointer ml-auto" onClick={() => setIsDown4(!isDown4)}>
                                {isDown4 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                }
                            </span>
                        </div>

                        <nav className={`my-3 ${isDown4 ? "block" : "hidden"}`}>
                            {data.slice(10, 14).map((value, index) => (
                                <Link to={`/${value.nama}`} key={index} className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                    <div className="flex items-center gap-x-2 ">
                                        <span className={`w-2 h-2 rounded-full bg-[${value.bg}]`}></span>
                                        <span>{value.nama}</span>
                                    </div>
                                </Link>
                            ))
                            }
                        </nav>
                    </div>

                    <div className={`py-2 ${isOpen ? "block" : "hidden"}`}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-600 w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span className=" text-sm font-medium text-gray-600 mx-2 ">Bab Nasab</span>
                            <span className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 border rounded-lg cursor-pointer ml-auto" onClick={() => setIsDown2(!isDown2)}>
                                {isDown2 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                }
                            </span>
                        </div>

                        <nav className={`my-3 ${isDown2 ? "block" : "hidden"}`}>
                            {data.slice(14, 25).map((value, index) => (
                                <Link to={`/${value.nama}`} key={index} className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                    <div className="flex items-center gap-x-2 ">
                                        <span className={`w-2 h-2 rounded-full bg-[${value.bg}]`}></span>
                                        <span>{value.nama}</span>
                                    </div>
                                </Link>
                            ))
                            }
                        </nav>
                    </div>

                    <div className={`py-2 ${isOpen ? "block" : "hidden"}`}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-600 w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span className=" text-sm font-medium text-gray-600 mx-2">Bab Khofad</span>
                            <span className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 border rounded-lg cursor-pointer ml-auto" onClick={() => setIsDown3(!isDown3)}>
                                {isDown3 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                }
                            </span>
                        </div>

                        <nav className={`my-3 ${isDown3 ? "block" : "hidden"}`}>
                            {data.slice(25, 26).map((value, index) => (
                                <Link to={`/${value.nama}`} key={index} className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                                    <div className="flex items-center gap-x-2 ">
                                        <span className={`w-2 h-2 rounded-full bg-[${value.bg}]`}></span>
                                        <span>{value.nama}</span>
                                    </div>
                                </Link>
                            ))
                            }
                        </nav>
                    </div>

                </div>
            </aside>

            <div className="md:hidden fixed bottom-4 z-50 w-full h-16 max-w-lg -translate-x-1/2  left-1/2 navdown">
                <div className="grid h-full max-w-lg grid-cols-5 mx-3 bg-white shadow-xl border border-gray-200 rounded-full mx-4">
                    <Link to={`/${left}`} className="inline-flex flex-col items-center justify-center px-auto rounded-s-full hover:bg-gray-100 group active:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-chevron-left w-7 h-7 text-gray-500 group-hover:text-blue-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 15l-3 -3l3 -3" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg>
                        <span className="sr-only">left</span>
                    </Link>
                    <Link to="https://saweria.co/Khaizulaftar" className="inline-flex flex-col items-center justify-center px-auto hover:bg-gray-100 group active:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-wallet w-7 h-7 text-gray-500 group-hover:text-blue-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" /><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" /></svg>
                        <span className="sr-only">Wallet</span>
                    </Link>
                    <div className="flex items-center justify-center">
                        <Link to='/' className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 active:bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home w-7 h-7 text-white"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                            <span className="sr-only">Home</span>
                        </Link>
                    </div>
                    <Link to="https://www.instagram.com/khais1507/profilecard/?igsh=MXFjanJ3Yzc4d2gzaQ==" className="inline-flex flex-col items-center justify-center px-auto hover:bg-gray-100 group active:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message w-7 h-7 text-gray-500 group-hover:text-blue-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9h8" /><path d="M8 13h6" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /></svg>
                        <span className="sr-only">Messege</span>
                    </Link>
                    <Link to={`/${right}`} className="inline-flex flex-col items-center justify-center px-auto rounded-e-full hover:bg-gray-100 group active:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-chevron-right  w-7 h-7 text-gray-500 group-hover:text-blue-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 9l3 3l-3 3" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg>
                        <span className="sr-only">right</span>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Sidebar