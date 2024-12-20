import Footer from "../navigation/footer"
import Navbar from "../navigation/navbar"
import text from "../data/text.json"
import { Link } from "react-router-dom"

function Learn() {
    return (
        <>
            <Navbar />
            <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true" >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/4 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[80.1875rem] sm:-top-0 mx-40 my-0"
                    style={{ clipPath: "circle(10% at 50% 50%)" }}>
                </div>
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/4 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[80.1875rem] sm:-top-0 mx-40 my-0"
                    style={{ clipPath: "circle(28% at 29% 72%)" }}>
                </div>
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/4 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[80.1875rem] sm:-top-0 mx-40 my-0"
                    style={{ clipPath: "polygon(73% 0, 100% 0, 100% 22%, 73% 57%, 35% 36%, 30% 70%, 6% 68%, 0 47%, 21% 15%, 66% 39%)" }}>
                </div>

                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/4 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[80.1875rem] sm:-top-0 mx-40 my-0"
                    style={{ clipPath: "polygon(53% 29%, 30% 0, 69% 18%, 77% 0, 100% 0, 100% 26%, 82% 32%, 100% 84%, 67% 45%, 39% 68%, 0 100%, 27% 61%)" }}>
                </div>
            </div>
            <div className="relative bg-gray-900">
                <div className="absolute inset-x-0 bottom-0">
                    <svg
                        viewBox="0 0 224 12"
                        fill="currentColor"
                        className="w-full -mb-1 text-white"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                    </svg>
                </div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl text-center">
                        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none capitalize">
                            belajar nahwu{' '}
                            <br className="hidden md:block" />
                            kitab{' '}
                            <span className="relative inline-block">
                                al-jurumiyah
                                <div className="w-full h-3 -mt-3 bg-purple-400" />
                            </span>
                        </h2>
                        <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
                            Kitab al-jurumiyyah berisi kumpulan materi nahwu yang mencakup hampir keseluruh inti ilmu nahwu. Kitab ini berisi 24 bab yang berisi materi seputar istilah penting ilmu nahwu seperti isim, fi'il dan huruf.
                        </p>
                        <p className="max-w-md mb-10 text-xs font-thin tracking-wide text-gray-500 sm:text-sm mx-auto md:mb-16">
                            pada pelajaran kali ini kita akan belajar apa itu ilmu nahwu secara singkat dengan berpedoman kitab aljurumiyah.
                        </p>
                        <Link to="/bab kalam" className="rounded-lg bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-200 border-2 border-gray-700" style={{ boxShadow: " #374151 0px 4px 0px" }}>Mulai belajar</Link>
                    </div>
                </div>
            </div>

            <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                {text.map((value, index) => (
                    <div key={index} className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col lg:flex-row">
                            <div className="mb-6 lg:w-1/2">
                                <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    {value.judul}
                                </h2>
                            </div>

                            <div className="grid lg:w-1/2 gap-6">
                                {value.paragraf.map((a, b) => (
                                    <div key={b} className="flex">
                                        <div className="flex flex-col items-center mr-6">
                                            <div className="w-px h-full bg-gray-300" />
                                            <div>
                                                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                                    {b + 1}
                                                </div>
                                            </div>
                                            <div className="w-px h-full bg-gray-300" />
                                        </div>
                                        <div className="flex flex-colm sm:items-center sm:flex-row">
                                            <div>
                                                <p className="text-xl font-semibold sm:text-base mb-2">
                                                    {a.slice(0, 1)}
                                                </p>
                                                {a.slice(1).map((c, d) => (
                                                    <p key={d} className="text-sm text-gray-700 mb-6">
                                                        {c}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    )
}

export default Learn