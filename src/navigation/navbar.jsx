import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


gsap.registerPlugin(ScrollTrigger);
function Navbar() {
    const [isClick, setIsclick] = useState(true)

    useEffect(() => {
        let lastScroll = 1;
        ScrollTrigger.create({
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            onUpdate: (self) => {
                const currentScroll = self.scroll();
                if (currentScroll > lastScroll) {
                    gsap.to('.navbar', { y: -200 });
                } else if (currentScroll < lastScroll) {
                    gsap.to('.navbar', { y: 0 });
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
            <nav className="relative sticky top-0 z-10 shadow bg-white navbar">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <img className="w-auto h-6 sm:h-6" src="/ID.svg" alt="logo" />
                        <div className="flex md:hidden">
                            <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu" onClick={() => setIsclick(!isClick)}>
                                {
                                    isClick ?
                                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 w-6 h-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                                        :
                                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x w-6 h-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                                }
                            </button>
                        </div>
                    </div>

                    <div className={`${isClick ? 'opacity-0 -translate-x-full' : 'translate-x-0 opacity-100 '} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                        <div className="flex flex-col md:flex-row md:mx-6 ">
                            <Link to="/" className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0">Home</Link>
                            <Link to="https://www.instagram.com/khais1507/profilecard/?igsh=MXFjanJ3Yzc4d2gzaQ==" className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0">Contact</Link>
                            <Link to="https://saweria.co/Khaizulaftar" className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0">Support</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar