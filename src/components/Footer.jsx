import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faWhatsapp, faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-scroll";

const Footer = () => {

    const date = new Date();
    const currentDate = date.getFullYear();

    return (
        <footer className="bg-primary pt-5">
            <div className="md:mx-24 md:flex md:justify-between items-center md:py-3">
                <nav className="flex flex-col justify-center md:flex-row items-center gap-5 md:gap-10 text-xl">
                    <Link
                        className="font-raleway font-semibold text-white cursor-pointer transition-all"
                        to="menu"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Menu</Link>
                    <Link
                        className="font-raleway font-semibold text-white cursor-pointer transition-all"
                        to="contacto"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Contacto</Link>
                    <Link
                        className="font-raleway font-semibold text-white cursor-pointer transition-all"
                        to="nosotros"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Nosotros</Link>
                    <Link
                        className="font-raleway font-semibold text-white cursor-pointer transition-all"
                        to="ubicacion"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Ubicación</Link>
                </nav>
                <nav className="flex justify-center gap-5 mt-7 md:mt-0 md:gap-10">
                    <a>
                        <FontAwesomeIcon className="text-white w-8 h-8" icon={faWhatsapp} />
                    </a>

                    <a>
                        <FontAwesomeIcon className="text-white w-8 h-8" icon={faFacebookF} />
                    </a>

                    <a>
                        <FontAwesomeIcon className="text-white w-8 h-8" icon={faInstagram} />
                    </a>

                    <a>
                        <FontAwesomeIcon className="text-white w-8 h-8" icon={faYoutube} />
                    </a>
                </nav>
            </div>
            <div className="bg-secondary mt-5 py-3 md:py-6">
                <p className="text-white text-center">&copy; {currentDate} Restaurante Todos los Derechos Reservados</p>
            </div>
        </footer>
    )
}

export default Footer