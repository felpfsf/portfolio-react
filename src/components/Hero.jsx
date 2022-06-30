import { ArrowUpRight } from "phosphor-react";
import heroImg from '../assets/Freelancer-cuate.png'

export function Hero() {
  return (
    <section id="hero" className="sm:p-4 md:p-8 lg:p-40 flex items-center justify-around sm:flex-col-reverse md:flex-row md:gap-8">

      <div className="flex flex-col gap-4">
        <h2 className="sm:text-xl lg:text-5xl font-bold">Olá! Me chamo Felipe F. e sou desenvolvedor Front-end.</h2>
        <p className="leading-tight lg:text-2xl">
          Trabalho com o desenvolvimento de websites e apps, quer me contratar?
        </p>

        <div className="lg:mt-6 pb-2 flex flex-row justify-evenly">
          <a
            href="https://github.com/felpfsf"
            className="sm:text-sm lg:text-xl font-semibold text-palette1-sunray hover:underline underline-offset-8 hover:text-palette1-platinum transition-colors flex items-center gap-2"
          >
            Github
            <ArrowUpRight size={16} weight="bold" className="text-palette1-platinum" />
          </a>

          <a
            href="http://linkedin.com/in/felipefsf"
            className="sm:text-sm lg:text-xl font-semibold text-palette1-sunray hover:underline underline-offset-8 hover:text-palette1-platinum transition-colors flex items-center gap-2"
          >
            LinkedIn
            <ArrowUpRight size={16} weight="bold" className="text-palette1-platinum" />
          </a>

          <a
            href="https://cursos.alura.com.br/emprega-one/profile/feferreira-sf"
            className="sm:text-sm lg:text-xl font-semibold text-palette1-sunray hover:underline underline-offset-8 hover:text-palette1-platinum transition-colors flex items-center gap-2"
          >
            Curriculo
            <ArrowUpRight size={16} weight="bold" className="text-palette1-platinum" />
          </a>
        </div>

      </div>
      {/* <img src="https://www.github.com/felpfsf.png" alt="" className="rounded-full sm:w-32 md:w-44 lg:w-96 self-start mb-4" /> */}
      <img src={heroImg} alt="" className="rounded-2xl sm:w-40 md:w-44 lg:w-96 self-start mb-4" />
    </section>
  )
}