export const SchollarshipCards = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center w-[368px] h-[286px] p-16">
        <img src={props.imgUrl} alt="" className="w-50 h-40" />
      </div>
      <div>
        <h3 className="sm:text-base lg:text-xl text-palette1-onyx font-bold">{props.title}</h3>
        <p className="sm:text-sm lg:text-base text-palette1-grayBlue">{props.year} - {props.school}</p>
      </div>
    </div>
  )
}