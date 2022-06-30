import { CookingPot, GameController, PersonSimple, PersonSimpleRun, TelevisionSimple } from "phosphor-react"
import skills from "../data/skills"
import { SkillsCards } from "./SkillsCards"


export function Skills() {
  return (
    <section id="skills" className="sm:p-4 lg:p-16">
      <h2 className="sm:text-xl lg:text-3xl text-palette1-platinum font-bold text-center mb-8">Skills {'&'} Hobbies</h2>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">

        {skills.map(skillData => {
          return (
            <SkillsCards key={skillData.id} imgUrl={skillData.imgUrl} title={skillData.title} />
          )
        })}

        {/* <div className="bg-palette1-platinum p-4 flex flex-col items-center justify-center w-32 h-32">
          <img src="https://via.placeholder.com/752x456.png?text=Imagem_do_projeto" alt="" className="w-20 h-20" />
          <p className="text-base text-palette1-grayBlue">html</p>
        </div>

        <div className="bg-palette1-platinum p-4 flex flex-col items-center justify-center w-32 h-32">
          <img src="https://via.placeholder.com/752x456.png?text=Imagem_do_projeto" alt="" className="w-20 h-20" />
          <p className="text-base text-palette1-grayBlue">css</p>
        </div>

        <div className="bg-palette1-platinum p-4 flex flex-col items-center justify-center w-32 h-32">
          <img src="https://via.placeholder.com/752x456.png?text=Imagem_do_projeto" alt="" className="w-20 h-20" />
          <p className="text-base text-palette1-grayBlue">javascript</p>
        </div>

        <div className="bg-palette1-platinum p-4 flex flex-col items-center justify-center w-32 h-32">
          <img src="https://via.placeholder.com/752x456.png?text=Imagem_do_projeto" alt="" className="w-20 h-20" />
          <p className="text-base text-palette1-grayBlue">react</p>
        </div> */}

      </div>

      <h2 className="sm:text-xl lg:text-3xl text-palette1-platinum font-bold text-center mt-20 mb-8">Hobbies</h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">

        <div className=" p-4 flex flex-col items-center justify-center w-32 h-32">
          {/* <img src="https://via.placeholder.com/752x456.png?text=Imagem_do_projeto" alt="" className="w-20 h-20" /> */}
          <TelevisionSimple size={56} className="text-palette1-alabaster font-bold" />
          <p className="text-base text-palette1-alabaster font-bold mt-2">Séries TV</p>
        </div>

        <div className=" p-4 flex flex-col items-center justify-center w-32 h-32">
          {/* <img src="https://via.placeholder.com/752x456.png?text=Imagem_do_projeto" alt="" className="w-20 h-20" /> */}
          <CookingPot size={56} className="text-palette1-alabaster font-bold" />
          <p className="text-base text-palette1-alabaster font-bold mt-2">Cozinhar</p>
        </div>

        <div className=" p-4 flex flex-col items-center justify-center w-32 h-32">
          {/* <img src="https://via.placeholder.com/752x456.png?text=Imagem_do_projeto" alt="" className="w-20 h-20" /> */}
          <PersonSimpleRun size={56} className="text-palette1-alabaster font-bold" />
          <p className="text-base text-palette1-alabaster font-bold mt-2">Esportes</p>
        </div>

        <div className=" p-4 flex flex-col items-center justify-center w-32 h-32">
          {/* <img src="https://via.placeholder.com/752x456.png?text=Imagem_do_projeto" alt="" className="w-20 h-20" /> */}
          <GameController size={56} className="text-palette1-alabaster font-bold" />
          <p className="text-base text-palette1-alabaster font-bold mt-2">Jogos</p>
        </div>

      </div>
    </section>
  )
}