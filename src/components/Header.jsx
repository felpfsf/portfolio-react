export function Header() {
  return (
    <nav className="sm:p-4 lg:px-36 sm:mx-8 md:mx-4 lg:mx-4 mb-8 border-b border-palette1-alabaster flex items-center sm:justify-center md:justify-between">
      <h1 className="font-cursive sm:text-4xl text-palette1-sunray">{'< '}Felipe F.{' />'}</h1>
      <div>
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
      </div>
    </nav>
  )
}