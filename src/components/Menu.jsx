
const Menu = () => {
  return (
    <main className="my-24 md:mx-24" id="menu">
      <h3 className="after:mx-auto after:block after:w-44 md:after:w-52 after:h-1 after:bg-primary after:mt-3 text-center font-raleway font-bold text-3xl md:text-4xl uppercase">Nuestro Menu</h3>

      <div className="grid md:grid-cols-2 md:grid-rows-4 gap-10 md:gap-7 md:gap-x-24 mt-16 mx-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(platillo => (
          <div key={platillo} className="flex justify-between items-center gap-5 font-raleway font-bold">
            <div className="flex flex-col">
              <p className="text-2xl">Platillo 1</p>
              <p className="text-secondary">Descripción del Platillo</p>
            </div>
            <p className="text-3xl">$150</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Menu