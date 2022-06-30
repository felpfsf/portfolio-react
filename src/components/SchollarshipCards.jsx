export const SchollarshipCards = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center w-[240] p-10">
        <img src={props.imgUrl} alt="" className="w-32 h-20" />
      </div>
      <div>
        <h3 className="sm:text-base lg:text-xl text-palette1-onyx font-bold">{props.title}</h3>
        <p className="sm:text-sm lg:text-base text-palette1-grayBlue">{props.year} - {props.school}</p>
      </div>
    </div>
  )
}