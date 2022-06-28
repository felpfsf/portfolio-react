import { ArrowUpRight } from "phosphor-react";

export function Hero() {
  return (
    <section id="hero" className="p-4 flex items-center justify-around flex-col-reverse">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Hey, My Name is Felipe F. Lorem ipsum dolor sit amet.</h2>
        <p className="leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatibus eveniet culpa. Minima fugit placeat quas corporis, fuga officia quae?</p>
        <div className="pb-2 flex flex-row justify-evenly">
          <span className="flex items-end gap-1">
            <p className="text-sm font-semibold text-palette1-sunray">Github</p>
            <ArrowUpRight size={16} weight="bold" />
          </span>
          <span className="flex items-end gap-1">
            <p className="text-sm font-semibold text-palette1-sunray">LinkedIn</p>
            <ArrowUpRight size={16} weight="bold" />
          </span>
          <span className="flex items-end gap-1">
            <p className="text-sm font-semibold text-palette1-sunray">Curriculo</p>
            <ArrowUpRight size={16} weight="bold" />
          </span>
        </div>
      </div>
      <img src="https://www.github.com/felpfsf.png" alt="" className="rounded-full w-32 self-start mb-4" />
    </section>
  )
}