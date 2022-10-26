
const Ubicacion = () => {
    return (
        <section className="my-24 md:mx-24">
            <h3 className="after:mx-auto after:block after:w-44 md:after:w-52 after:h-1 after:bg-primary after:mt-3 text-center font-raleway font-bold text-2xl md:text-4xl uppercase">¿Dónde nos ubicamos?</h3>

            <div className="my-14">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60361.39673465024!2d-98.23663731845912!3d18.99382549895052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0ee6acabbc3%3A0xfbf87c1c2a54522c!2sEl%20Mural%20de%20los%20Poblanos!5e0!3m2!1ses!2smx!4v1666756269420!5m2!1ses!2smx" allowFullScreen="" loading="lazy" className="h-[45vh] w-[93%] mx-auto md:w-full" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </section>
    )
}

export default Ubicacion