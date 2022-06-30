import { List, X } from "phosphor-react";
import { useRef, useState } from "react";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const showMenu = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeMenu = () => {
    setIsNavOpen(false)
  }


  return (
    <section className="sticky top-0 bg-palette1-onyx">

      <header className="sm:p-4 lg:px-36 sm:mx-8 md:mx-4 lg:mx-4 mb-8 border-b border-palette1-alabaster flex items-center sm:justify-between md:justify-between">
        <h1 className="font-cursive sm:text-4xl text-palette1-sunray">Felipe F.</h1>
        <nav>
          <div onClick={showMenu} className="md:hidden">
            <List size={32} className="cursor-pointer" />
          </div>

          <ul className={isNavOpen ? 'font-barlowCondensed text-palette1-sunray text-xl fixed inset-0 left-1/4 bg-palette1-onyx backdrop-blur-3xl flex flex-col items-center justify-center gap-16' : 'hidden'}>
            <div onClick={showMenu}>
              <X className="cursor-pointer" />
            </div>
            <li>
              <a
                href="#hero"
                onClick={closeMenu}
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#schollarship"
                onClick={closeMenu}
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >
                Formação
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >
                Contato
              </a>
            </li>
          </ul>
          <ul role="list" className="font-barlowCondensed text-palette1-sunray text-xl md:flex md:gap-4 lg:gap-8 sm:hidden">
            <li>
              <a
                href="#hero"
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#schollarship"
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >
                Formação
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-palette1-platinum hover:underline hover:underline-offset-8 transition-all"
              >
                Contato
              </a>
            </li>

          </ul>

        </nav>
      </header>
    </section>
  )
}