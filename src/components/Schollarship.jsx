import formacoes from "../data/formacoes";
import { SchollarshipCards } from "./SchollarshipCards";

export function Schollarship() {

  return (
    <section id="schollarship" className="bg-palette1-platinum sm:p-4 md:p-8 lg:p-16">
      <h2 className="sm:text-2xl lg:text-4xl text-palette1-onyx font-bold text-center mb-8">
        Formação Acadêmica
      </h2>
      <div className="flex sm:flex-col md:flex-row md:flex-wrap justify-center gap-8">

        {formacoes.map(formacaoData => {
          return (
            <SchollarshipCards key={formacaoData.id} {...formacaoData} />
          )
        })}


        {/* <div className="flex sm:flex-col">
          <img src="https://via.placeholder.com/368x286.png?text=Imagem_da_formação" alt="" className="mb-2" />
          <div>
            <h3 className="sm:text-base lg:text-xl text-palette1-onyx font-bold">Formação #1</h3>
            <p className="sm:text-sm lg:text-base text-palette1-grayBlue">2008 - Universidade</p>
          </div>
        </div>

        <div className="flex sm:flex-col">
          <img src="https://via.placeholder.com/368x286.png?text=Imagem_da_formação" alt="" className="mb-2" />
          <div>
            <h3 className="sm:text-base lg:text-xl text-palette1-onyx font-bold">Formação #2</h3>
            <p className="sm:text-sm lg:text-base text-palette1-grayBlue">2010 - Universidade</p>
          </div>
        </div>

        <div className="flex sm:flex-col">
          <img src="https://via.placeholder.com/368x286.png?text=Imagem_da_formação" alt="" className="mb-2" />
          <div>
            <h3 className="sm:text-base lg:text-xl text-palette1-onyx font-bold">Formação #3</h3>
            <p className="sm:text-sm lg:text-base text-palette1-grayBlue">2022 - Universidade</p>
          </div>
        </div> */}

      </div>
    </section>
  )
}