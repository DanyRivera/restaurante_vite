import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Barra = () => {

    const [mostrar, setMostrar] = useState(false);

    const [offsetY, setOffsetY] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        setOffsetY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (offsetY > 105) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [offsetY])

    return (
        <>

            <div className={`${!visible ? 'bg-[rgba(0,0,0,0.50)] transition-all' : 'bg-black transition-all'} flex justify-between items-center px-5 md:px-32 py-6  fixed w-full z-20`}>
                <h1 className="font-raleway font-bold text-2xl md:text-4xl text-center text-white">Restaurante</h1>
                <nav className="hidden md:flex gap-10 text-xl">
                    <Link
                        className="font-raleway font-medium text-white hover:text-secondary cursor-pointer transition-all"
                        to="menu"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Menu</Link>
                    <Link
                        className="font-raleway font-medium text-white hover:text-secondary cursor-pointer transition-all"
                        to="contacto"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Contacto</Link>
                    <Link
                        className="font-raleway font-medium text-white hover:text-secondary cursor-pointer transition-all"
                        to="nosotros"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Nosotros</Link>
                    <Link
                        className="font-raleway font-medium text-white hover:text-secondary cursor-pointer transition-all"
                        to="ubicacion"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Ubicación</Link>
                </nav>
                <div className="flex justify-center md:hidden text-white">
                    <button
                        onClick={() => setMostrar(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`${mostrar ? 'mostrar' : 'ocultar'} md:hidden fixed bg-black h-screen w-full z-30`}>

                <div className="text-white flex justify-end m-4">
                    <button
                        onClick={() => setMostrar(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col">
                    <Link
                        onClick={() => setMostrar(false)}
                        className="font-raleway font-medium text-white py-8 pl-8 border-y cursor-pointer"
                        to="menu"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Menu</Link>
                    <Link
                        onClick={() => setMostrar(false)}
                        className="font-raleway font-medium text-white py-8 pl-8 border-b cursor-pointer"
                        to="contacto"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Contacto</Link>
                    <Link
                        onClick={() => setMostrar(false)}
                        className="font-raleway font-medium text-white py-8 pl-8 border-b cursor-pointer"
                        to="nosotros"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Nosotros</Link>
                    <Link
                        onClick={() => setMostrar(false)}
                        className="font-raleway font-medium text-white py-8 pl-8 border-b cursor-pointer"
                        to="ubicacion"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Ubicación</Link>
                </nav>
            </div>

        </>
    )
}

export default Barra