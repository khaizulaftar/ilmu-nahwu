import Footer from "../navigation/footer"
import Navbar from "../navigation/navbar"
import data from '../data/data.json'
import { useState } from "react"
import { Link } from 'react-router-dom';

function Home() {
    const [isOpen, setIsopen] = useState(true)
    return (
        <>
            <Navbar />

            {/* first page */}
            {/* background */}
            <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/4 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[80.1875rem] sm:-top-0 mx-40 my-0"
                    style={{ clipPath: "polygon(73% 0, 100% 0, 100% 22%, 73% 57%, 35% 36%, 30% 70%, 6% 68%, 0 47%, 21% 15%, 66% 39%)" }}>
                </div>

                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/4 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[80.1875rem] sm:-top-0 mx-40 my-0"
                    style={{ clipPath: "polygon(53% 29%, 30% 0, 69% 18%, 77% 0, 100% 0, 100% 26%, 82% 32%, 100% 84%, 67% 45%, 39% 68%, 0 100%, 27% 61%)" }}>
                </div>

                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/4 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[80.1875rem] sm:-top-0 mx-40 my-0"
                    style={{ clipPath: "circle(28% at 29% 72%)" }}>
                </div>
            </div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg order-2">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJ0lEQVR4nO2avU7DMBDHf6JQ8fEGZeMxEOwwwHPACwADICZaPl6Gig2mRnmArjDA0AISC2JDQgqK5CKrjdO6td2muZ8UKXWuPd8/5ztXMgiCIAhCFkvALfAJJI6vL+AB2NH87QKP6plrf2kMN8AiFlx7mEjWdQ5cBPJ1lRdwVRm89X1pE/fUgGPgR/OT3h+pZ67Z6oupCzRUzP80DKr55ETzkwrik6zY6rpBt++NhxCgpvnx8eZ19Hh6GdE1GWR9DjGxkH4G/I4iQAxEDsdMfnz4ciJA4njMdtzlmAgwTgakadVyOGby48OXkwyg7EXQByIAkgEUagnEE/wZsd0H+PQztgDRBBOz7QI+/UgRlC5A8WtAZLAvTQ1oGeylBmQgRRDpAkgbZM66QDKBn7noApP4GVsA10zLjwggNQCpAYnVGgm0NktXAyJD1Z5ZAeIhfTe27M8mbPYBo/yu131Aa8jzvP5swmYf0CryEogtM2NcZlaApOxFMBEBkAxIyrwEoqLtA4qKtQBd9Tk9UFR0tlUsHRsB6hYbkVk/Kdq7Lm0EqCoReplQ5JOiHRV81UYAn4Q+KZrFQLzTWPMhT4oOqwn4XPPp9Q3cARsjnBRNbZrqO0mgmkCoNf8CrObsA9aA1ynUBO+sA201gYMcu0Nl0w5YD4Kxr4J7V7Wmoj2rqLEPZbPHHLIA3I+Qok1lO5esAGfAM/CrBZ3ePwGnwPK0JykIgiBQAv4AyURJ6L+5b3AAAAAASUVORK5CYII=" alt="literature" />

                        </div>
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl sm:leading-none">
                                Belajar Ilmu Nahwu
                                <br className="hidden md:block" />
                                <span className="text-[#FAB005]">
                                    {''} Itu mudah
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Belajar ilmu nahwu dengan secara singkat dan tepat dengan berpedoman kitab al-jurumiyah.
                            </p>
                        </div>
                        <div className="flex items-center gap-x-6">
                            <Link to="/learn" className="rounded-lg bg-[#ffd43b] px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-[#FAB005] border-2 border-gray-700" style={{ boxShadow: " #374151 0px 4px 0px" }}>Mulai belajar</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center -mx-4 lg:order-2">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover mb-6 rounded-lg shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src="/image/55727448_9358487.svg"
                                alt=""
                            />
                            <img
                                className="object-cover w-20 h-20 rounded-lg shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src="/image/55727451_9358490.svg"
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover w-40 h-40 rounded-lg shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src="/image/61399017_9427942.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* first page */}
            {/* information */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
                <div className="flex flex-col items-start max-w-screen-sm md:flex-row md:ml-auto md:mx-0 sm:mx-auto">
                    <img src="data:image/png;base64,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" alt="order-history" className="mb-4 mr-8" />
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
                            ayo belajar
                        </p>
                        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl sm:leading-none">
                            Apa itu ilmu nahwu
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            ilmu nahwu adalah cabang ilmu bahasa arab yang mempelajari tata bahasa dan struktur kalimat dalam bahasa arab.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
                <div className="flex flex-col items-start max-w-screen-sm md:flex-row md:mr-auto md:mx-0 sm:mx-auto">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHTklEQVR4nO1bW08bVxD2Ux6iPldq1fY3VOpjpT5UrfpPojY2kJC2akhTkvShcb0LhiYtNskuxo5NbMythGtQLjQkDSThmnI1MXcSLjYQDL4w1ex63WV3be/auwZVHmkk65zjc/b7Zs7MnD22TpeXvOQlLwrEcspykjDQFwk9PU4Y6DBpoOEIdJEw0FdLS90ndLkU09e175J66vkRgRYpkpBT8ISBGsWFLZc8iYcIb/oUa2x7GSAUYBQ/S7XzlT8G1T80lPCEnIEn9fQILlp9xQsdY1sZE8AHGZUBnj8GNRL0A4Q2EuvnHHz7WBC6ffsZEZAN+FhoMwEe+3JCgCkJ+EwIyBz8LAOekfBOol9zAkw88DcE4JUSkJXl9wJwSMK72hNgSgNeCQGq7Hm0PMr+tvYeYOKBt5R6oG1EDF4OAWg5tQIe0x+3vKYEmGSCT0dAdGc17q5v1QEvoaoTYDllOckVOdWXvdA+upUUfCoCGPAHUZaAgxgTwKTAB5eWwFPRCuYiW+6KJz21T+jpbnOh7SMRAYSBvshY/id3WvBNvfPMhFXnnSK3lxLhdkBF8EdYRXaJCdDT40onenD7rjjgodsfxOIOEGU8QsrtK8/ZmTl6rU54ZnPlRHEt1hPoLSkPCMsFjpa/7+6B0NqMdHkbz9vRnZWke95t/vN4eQCpUm3PBTMpt+ePWZ99CR5zE5iLanIcA6hOyRhAZkiAGqnuefcAs3a18Q48Wggz+ngxDDObBzC/BQn1BwH6lyOJMX0SY4TjrFe5WEMZUmYBMgMC1MrzkeA6XP/uFrN+Z/8yPFkMg08K/FIkJUHCcThXHPzGtdPX3lGVgJiaRU4oAA/r/2LWt1vuS4NXaHlU2289nOv/khK8UgLUBo+6vbIC5UU2KCuyweT826SWTwmeN+7e2CaUFdYAoacjVwusH+iyIWDi7wGoKnGCpcQJMwMjqoPn9M6Nu8wztHmfJbX8tAzL4/ZotD9h5iL0tD0t+HQEIHCu3/pj3SFgTqM3o4hcR7aICFiZfgVkAQ0VxQ6YXAwdtvxCCvCC2DDiC0L5mVogDNRB+Wn6Y53aBER5Vq0jmlQjALXF0sn00xXd8GheOfjp9SjYiDau4HHKAp+OAHR764U6Bjx+Vvtgw9et5WW4/j2bEW7RfdA3rwD8WhTc1nus6xvo1bIz9vd02RIQ0yDgpdNXQ5NQcbaWeR5HZTdMLe6mBT88HYAaY+J88dZ0uuYz2eCTEXAU4Dn1D08lPKHinAN62sdgLnAgzgrz+9DRPATmOGGkgVouM9Cf6pQKKSCAD3JqYFgyC2gFPpEaV1eg8ff2RNxocjwWpUSvrY9X6tIefKehGLyQAKHlpbIApy5Ti+KgJ/WdZEERdXZwghljLnaIUmLFWfZUSeipL3XZCBl/ECm3T0mAzCzAB4iflRCAyo0TZgWuPSvwKNxEUi7NzwKzLyY0dft0BDDgN/7LCpoQEMvgukpL8P6RKXYLnLWLUiJvC3ylCgHRHEf7VLq7tgqt1d0JK3trH4vqAQyMXD+hp1uM+hvvZ0VAWAL8zPNxsFxwMdtgmlcIaQl+8Z8ZqDrvSli+q3WESYNCArCtp20UKosdHBFvTAbq86wIiAksj8C5fssF5yHwLlNzRqVwqsC38HIGKovZvE7/2grjc9si4ELFE2QtGS+BDVSozHDzi4wIiEm4vRQBnOWlIno2BOy8XoE/fmAt7735EPybMRgZX4fOxkFwlHdA9eUGpjCq/PYWWK80gMPcAV3NQzA6uQH+QAy8NPtegTBQa8Q31IeKCQAJi6DbYypE8FNPBzQNeNyRuPpKI3Q1D4KltF42odZLXuhsGYLqnxs5EuqzJiCWw2j/xjcHZQXil6SWkhroopww9dANq8P1sOPzMro65IHJB27ouumEqvPi7+FxmCis+SRjAqI5BI/aRrFHYdSyQhpuE3YY674Ne/4G2J9PrXtzDTDT64bmaw4oL+QRIfdITKYohPCNELo/xgIfrxBSUwOLs8wrcnMhDX0eFwQm6tOCTqab417oczuZufC+Q1YsIHkECC1vLXFlfRZIFfhwPbxlwv47VY6MgQsV52K9gDLKJiAq4fb8LCAkQGkWEBKA6+2+xqMv+7BzTz2qEbDQz/6Yi9BTmxm9Fo/E9zy6vdRZIFvlAmx/ey9LjtGuGnhO64xsPUHo6QJFBETkBLzIHkAomBH4jTkfuMsbj+BqLMn1OMkjQDZ45u47opgEdHsEnzPgSi5HI7JTXZAFv7elGDySzJW6x+Z6nExkASV5XrnluS3mLm86nh4AGuR4fsDj9Nhej4MG4IWpVQ3lnlenlpAaEaAF+JwQ4DK1iIoWpW188HiH6DI1HAKRTZvmBJASHqG0TeqB1W7LE6CWkAJLogsLXVtOG7o9uqvQZdVuO5ZBMKpRwMtVEFzCCfGF5HEH/2rwhfp/mSELaoxHWJllWtik//GTXCktdZ/Af2Ehq0cO7Lj+bS4vecmL7v8m/wKUDVwevHknvgAAAABJRU5ErkJggg==" alt="order-history" className="mb-4 mr-8" />
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
                            ayo belajar
                        </p>
                        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl sm:leading-none">
                            Tujuan ilmu nahwu
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Tujuan mempelajari ilmu ini adalah untuk menjaga lisan dari kesalahan dalam pelafazan bahasa Arab.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
                <div className="flex flex-col items-start max-w-screen-sm md:flex-row md:ml-auto md:mx-0 sm:mx-auto">
                    <img src="data:image/png;base64,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" alt="order-history" className="mb-4 mr-8" />
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
                            ayo belajar
                        </p>
                        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl sm:leading-none">
                            Sejarah ilmu nahwu
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Dahulu orang Arab berbicara bahasa Arab secara natural tanpa lahn (kesalahan).
                        </p>
                    </div>
                </div>
            </div>
            {/* information */}

            {/* card components */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-md mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#F7C15F] sm:text-4xl text-center mx-auto">
                        <span className="relative inline-block text-slate-700">
                            <span className="relative text-slate-700">Bab-Bab dalam</span>
                        </span>
                        {' '}ilmu nahwu
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        ilmu nahwu mempunyai beberapa bab, namun kali ini kita hanya membahas bab-bab yang ada di dalam kitab al-jurumiyah
                    </p>
                </div>

                <div className="max-w-screen-xl lg:max-w-screen-lg mx-5 mm:mx-auto grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 md:grid-cols-3 mm:grid-cols-2 grid-cols-1">

                    {
                        data.slice(0, isOpen ? 8 : data.length).map((value, index) => (
                            <>
                                <Link
                                    to={`${value.nama}`}
                                    key={index}
                                    aria-label="View Item"
                                    className="inline-block overflow-hidden duration-300 transform bg-white rounded-lg border-2 border-gray-700 shadow-sm hover:-translate-y-2"
                                    style={{ boxShadow: " #374151 0px 6px 0px" }}
                                >
                                    <div className="flex flex-col w-full items-center">
                                        <img
                                            src={value.image}
                                            className="object-cover w-full h-[8em]"
                                            alt="image"
                                        />

                                        <div className="flex-grow">
                                            <div className="p-5">
                                                <h6 className="mb-2 font-semibold leading-5">
                                                    {value.nama}
                                                </h6>
                                                <p className="text-sm text-gray-900">
                                                    {value.keterangan}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        ))
                    }

                </div>

                <div className="text-center">
                    <button
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-lg md:w-auto bg-purple-400 hover:bg-purple-700 border-2 border-gray-700"
                        onClick={() => setIsopen(!isOpen)}
                        style={{ boxShadow: " #374151 0px 6px 0px" }}
                    >
                        {
                            isOpen ? "Lebih Banyak" : "Lebih Sedikit"
                        }
                    </button>
                </div>
            </div>
            {/* card components */}
            <Footer />
        </>
    )
}

export default Home
