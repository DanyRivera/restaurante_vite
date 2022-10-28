
const Nosotros = () => {
    return (
        <section className="my-24 md:mx-24" id="nosotros">
            <h3 className="after:mx-auto after:block after:w-44 md:after:w-52 after:h-1 after:bg-primary after:mt-3 text-center font-raleway font-bold text-2xl md:text-4xl uppercase">Acerca de Nosotros</h3>
            <div className="flex flex-col md:flex-row mx-5 gap-5 md:gap-10 mt-7 md:mt-14">
                <img className="md:w-2/4" src="/img/nosotros.png" alt="Acerca de Nosotros" />
                <div className="font-raleway font-bold -order-1 md:order-1">
                    <h3 className="text-xl mb-2 md:text-2xl">¿Quienes Somos?</h3>
                    <p className="text-secondary md:tracking-wide leading-loose md:text-xl">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desk
                        top publishing packages and web page editors now use Lorem Ipsum as their default model text.
                        top publishing packages and web page editors now use Lorem Ipsum as their default model text.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Nosotros