export function Projects() {
  return (
    <section id="projects" className="sm:p-4 lg:p-16">
      <h2 className="sm:text-2xl lg:text-4xl text-palette1-platinum font-bold text-center mb-8">
        Projetos
      </h2>
      <div>
        <div className="mb-16 flex lg:flex-row lg:items-center gap-6 sm:flex-col">
          <img src="https://via.placeholder.com/752x456.png?text=Imagem_do_projeto" alt="" className="border-2 border-palette1-platinum" />
          <div>
            <h3 className="text-xl">Projeto #1</h3>
            <p className="text-base">Subtítulo do projeto</p>
            <div className="mt-2 flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-palette1-fireOpal font-bold text-palette1-platinum hover:bg-palette1-grayBlue transition-colors"
              >
                Repositório
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-palette1-sunray font-bold text-palette1-onyx hover:brightness-125 transition-all"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </div>
        <div className="mb-16 flex lg:flex-row-reverse lg:items-center gap-6 sm:flex-col">
          <img src="https://via.placeholder.com/752x456.png?text=Imagem_do_projeto" alt="" className="border-2 border-palette1-platinum" />
          <div className="sm:text-left lg:text-right">
            <h3 className="text-xl">Projeto #2</h3>
            <p className="text-base">Subtítulo do projeto</p>
            <div className="mt-2 flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-palette1-fireOpal font-bold text-palette1-platinum hover:bg-palette1-grayBlue transition-colors"
              >
                Repositório
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-palette1-sunray font-bold text-palette1-onyx hover:brightness-125 transition-all"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </div>
        <div className="mb-16 flex lg:flex-row lg:items-center gap-6 sm:flex-col">
          <img src="https://via.placeholder.com/752x456.png?text=Imagem_do_projeto" alt="" className="border-2 border-palette1-platinum" />
          <div>
            <h3 className="text-xl">Projeto #3</h3>
            <p className="text-base">Subtítulo do projeto</p>
            <div className="mt-2 flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-palette1-fireOpal font-bold text-palette1-platinum hover:bg-palette1-grayBlue transition-colors"
              >
                Repositório
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-palette1-sunray font-bold text-palette1-onyx hover:brightness-125 transition-all"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

