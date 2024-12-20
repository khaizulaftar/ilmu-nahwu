
import { useState } from "react"
import data from "../data/data.json"
import Sidebar from "../navigation/sidebar";


function Module({ bab, kiri, kanan }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isClick, setIsclick] = useState(null);
    const datas = data[bab - 1]

    return (
        <>
            <div className="md:flex">
                <Sidebar left={kiri} right={kanan} />
                <div className="w-full sm:max-w-screen-lg flex flex-col items-center px-6 py-12 mx-auto md:order-2">
                    <h2 className="text-center mx-auto text-4xl mb-10 font-semibold tracking-tight text-gray-800 font-amiri">
                        {datas.judul}
                    </h2>

                    {datas.arab.map((value, index) => (
                        <div className="flex flex-col w-full my-6" key={index}>

                            <p className="max-w-screen-md text-gray-500 ml-auto text-right text-2xl font-amiri leading-loose">
                                {value}
                            </p>
                            <p className="max-w-screen-md text-gray-500 mr-auto text-left font-open-sans leading-loose">
                                {datas.latin[index]}
                            </p>

                            {datas.position.includes(index + 1) && datas.img[datas.position.indexOf(index + 1)] && (
                                <div className="flex justify-center">
                                    <div className="flex items-center justify-center max-w-sm bg-blue-100 cursor-pointer rounded-xl shadow-lg mt-6" onClick={() => { setIsOpen(true); setIsclick(datas.img[datas.position.indexOf(index + 1)]) }}>
                                        <img
                                            className="rounded-xl"
                                            src={datas.img[datas.position.indexOf(index + 1)]}
                                            alt={`image-${index}`}
                                        />
                                    </div>

                                    {isOpen && isClick === datas.img[datas.position.indexOf(index + 1)] && (
                                        <div className={`fixed inset-0 z-10 mx-auto backdrop-blur-sm ${isOpen ? "block" : "hidden"}`} onClick={() => setIsOpen(false)}>
                                            <div className="flex min-h-screen text-center items-center justify-center p-6">
                                                <div className="flex items-center justify-center overflow-hidden shadow-xl max-w-4xl rounded-xl">
                                                    <img className="h-full rounded-lg" src={isClick} alt={`modal-image-${index + 1}`} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Module