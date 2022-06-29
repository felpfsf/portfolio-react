export function Schollarship() {
  return (
    <section id="schollarship" className="bg-palette1-platinum sm:p-4 lg:p-16">
      <h2 className="sm:text-2xl lg:text-4xl text-palette1-onyx font-bold text-center mb-8">
        Formação Acadêmica
      </h2>
      <div className="flex sm:flex-col md:flex-row justify-center gap-4">

        <div className="flex sm:flex-col">
          <img src="https://via.placeholder.com/368x286.png?text=Imagem_da_formação" alt="" className="mb-2"/>
          <div>
            <h3 className="sm:text-base lg:text-xl text-palette1-onyx font-bold">Formação #1</h3>
            <p className="sm:text-sm lg:text-base text-palette1-grayBlue">2008 - Universidade</p>
          </div>
        </div>

        <div className="flex sm:flex-col">
          <img src="https://via.placeholder.com/368x286.png?text=Imagem_da_formação" alt="" className="mb-2"/>
          <div>
            <h3 className="sm:text-base lg:text-xl text-palette1-onyx font-bold">Formação #2</h3>
            <p className="sm:text-sm lg:text-base text-palette1-grayBlue">2010 - Universidade</p>
          </div>
        </div>

        <div className="flex sm:flex-col">
          <img src="https://via.placeholder.com/368x286.png?text=Imagem_da_formação" alt="" className="mb-2"/>
          <div>
            <h3 className="sm:text-base lg:text-xl text-palette1-onyx font-bold">Formação #3</h3>
            <p className="sm:text-sm lg:text-base text-palette1-grayBlue">2022 - Universidade</p>
          </div>
        </div>

      </div>
    </section>
  )
}