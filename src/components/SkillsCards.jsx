
export function SkillsCards(props) {
  return (
    <div className=" p-4 border-r flex flex-col items-center justify-center w-32 h-32">
      <img src={props.imgUrl} alt="" className="w-20 h-20 text-palette1-onyx" />
      <p className="text-base text-palette1-alabaster mt-2 font-bold">{props.title}</p>
    </div>
  )
}
