import { ArrowUpRight } from "phosphor-react";

export function Hero() {
  return (
    <section id="hero" className="sm:p-4 md:p-8 flex items-center justify-around sm:flex-col-reverse md:flex-row md:gap-8">

      <div className="flex flex-col gap-4">
        <h2 className="sm:text-xl lg:text-5xl font-bold">Hey, My Name is Felipe F. Lorem ipsum dolor sit amet.</h2>
        <p className="leading-tight lg:text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, nihil?
        </p>

        <div className="lg:mt-6 pb-2 flex flex-row justify-evenly">

          <span className="flex items-end gap-1 group">
            <a href="#" className="sm:text-sm lg:text-xl font-semibold text-palette1-sunray group-hover:underline underline-offset-4">Github</a>
            <ArrowUpRight size={16} weight="bold" />
          </span>

          <span className="flex items-end gap-1 group">
            <a href="#" className="sm:text-sm lg:text-xl font-semibold text-palette1-sunray group-hover:underline underline-offset-4">LinkedIn</a>
            <ArrowUpRight size={16} weight="bold" />
          </span>

          <span className="flex items-end gap-1 group">
            <a href="#" className="sm:text-sm lg:text-xl font-semibold text-palette1-sunray group-hover:underline underline-offset-4">Curriculo</a>
            <ArrowUpRight size={16} weight="bold" />
          </span>

        </div>

      </div>
      <img src="https://www.github.com/felpfsf.png" alt="" className="rounded-full sm:w-32 md:w-44 lg:w-96 self-start mb-4" />
    </section>
  )
}