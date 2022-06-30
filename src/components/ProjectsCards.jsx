export function ProjectsCards(props) {
  return (
    <div className={props.id % 2 === 1 ? 'mb-16 flex lg:flex-row lg:items-center gap-6 sm:flex-col' : 'mb-16 flex lg:flex-row-reverse lg:items-center gap-6 sm:flex-col'}>
      <img src={props.imgUrl} alt="" className="border-2 border-palette1-platinum sm:w-[600px] md:w-1/2" />
      <div>
        <h3 className="text-xl font-bold">{props.title}</h3>
        <p className="text-base lg:w-60">{props.desc}</p>
        <div className="mt-2 flex gap-4">
          <a
            href={props.urlRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-palette1-fireOpal font-bold text-palette1-platinum hover:bg-palette1-grayBlue transition-colors"
          >
            Repositório
          </a>
          <a
            href={props.urlLive}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-palette1-sunray font-bold text-palette1-onyx hover:brightness-125 transition-all"
          >
            Ver Demo
          </a>
        </div>
      </div>
    </div>
  )
}

{/* <div className="mb-16 flex lg:flex-row lg:items-center gap-6 sm:flex-col"> */}
