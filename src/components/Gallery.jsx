import React from 'react'

const Gallery = () => {

    const imagenes = [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg'
    ]

    return (
        <section className='mx-10 md:mx-24'>
            <h3 className="after:mx-auto after:block after:w-44 md:after:w-40 after:h-1 after:bg-primary after:mt-3 text-center font-raleway font-bold text-2xl md:text-4xl uppercase">Fotos</h3>

            <div className='mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3 md:gap-10'>
                {imagenes.map((url, index) => (
                    <div className='outline-none md:hover:scale-110 md:hover:rotate-6 transition-all' key={index}>
                        <img className='rounded-lg' src={url} alt="Imagen Modal" />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Gallery