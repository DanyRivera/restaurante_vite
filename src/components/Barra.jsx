import { useState, useEffect } from "react";

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
                    <a className="font-raleway font-medium text-white hover:text-secondary cursor-pointer transition-all">Menu</a>
                    <a className="font-raleway font-medium text-white hover:text-secondary cursor-pointer transition-all">Contacto</a>
                    <a className="font-raleway font-medium text-white hover:text-secondary cursor-pointer transition-all">Nosotros</a>
                    <a className="font-raleway font-medium text-white hover:text-secondary cursor-pointer transition-all">Ubicación</a>
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
                    <a 
                        onClick={() => setMostrar(false)}
                        className="font-raleway font-medium text-white py-8 pl-8 border-y cursor-pointer"
                    >Menu</a>
                    <a 
                        onClick={() => setMostrar(false)}
                        className="font-raleway font-medium text-white py-8 pl-8 border-b cursor-pointer"
                    >Contacto</a>
                    <a 
                        onClick={() => setMostrar(false)}
                        className="font-raleway font-medium text-white py-8 pl-8 border-b cursor-pointer"
                    >Nosotros</a>
                    <a 
                        onClick={() => setMostrar(false)}
                        className="font-raleway font-medium text-white py-8 pl-8 border-b cursor-pointer"
                    >Ubicación</a>
                </nav>
            </div>

        </>
    )
}

export default Barra