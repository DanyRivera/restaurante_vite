import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faWhatsapp, faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Contacto = () => {
    return (
        <section className="my-24 md:mx-24">
            <h3 className="after:mx-auto after:block after:w-44 md:after:w-52 after:h-1 after:bg-primary after:mt-3 text-center font-raleway font-bold text-2xl md:text-4xl uppercase">Ponte en Contacto</h3>

            <div className="flex flex-col gap-5 md:flex-row md:gap-16 items-center my-14">
                <button className="outline-none bg-primary text-white w-full py-5 md:py-8 md:rounded-xl md:bg-white md:hover:bg-primary md:text-secondary md:hover:text-white border md:shadow-2xl md:transition-all md:hover:scale-105">
                    <FontAwesomeIcon className=" w-14 h-14" icon={faWhatsapp} />
                    <p className="font-raleway font-bold text-xl text-center">2222222</p>
                </button>
                <button className="outline-none bg-primary text-white w-full py-5 md:py-8 md:rounded-xl md:bg-white md:hover:bg-primary md:text-secondary md:hover:text-white border md:shadow-2xl md:transition-all md:hover:scale-105">
                    <FontAwesomeIcon className=" w-14 h-14" icon={faFacebookF} />
                    <p className="font-raleway font-bold  text-xl">@User</p>
                </button>
                <button className="outline-none bg-primary text-white w-full py-5 md:py-8 md:rounded-xl md:bg-white md:hover:bg-primary md:text-secondary md:hover:text-white border md:shadow-2xl md:transition-all md:hover:scale-105">
                    <FontAwesomeIcon className=" w-14 h-14" icon={faInstagram} />
                    <p className="font-raleway font-bold  text-xl">@User</p>
                </button>
                <button className="outline-none bg-primary text-white w-full py-5 md:py-8 md:rounded-xl md:bg-white md:hover:bg-primary md:text-secondary md:hover:text-white border md:shadow-2xl md:transition-all md:hover:scale-105">
                    <FontAwesomeIcon className=" w-14 h-14" icon={faYoutube} />
                    <p className="font-raleway font-bold  text-xl">@User</p>
                </button>
            </div>
        </section>
    )
}

export default Contacto