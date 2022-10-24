import Barra from "./Barra"

const Header = () => {
    return (
        <>
            <Barra />

            <header className="bg-image flex flex-col justify-center items-center">

                <h2 className="text-center text-white font-raleway font-extrabold text-5xl tracking-wider leading-tight px-2 mt-10 md:text-6xl z-10">La mejor comida está con nosotros!</h2>
                <p className="hidden md:block text-center text-secondary font-raleway font-bold text-2xl mt-5 z-10">Ponte en contacto con nosotros</p>
                <a className="efecto text-center text-white font-raleway font-bold cursor-pointer border-4 mt-16 px-8 py-3 rounded-sm text-xl md:text-2xl md:px-14 z-10">Contacto</a>

            </header>
        </>
    )
}

export default Header