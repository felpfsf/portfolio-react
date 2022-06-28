export function Header() {
  return (
    <nav className="sm:p-4 sm:mx-1 sm:mb-8 border-palette1-alabaster flex items-center md:justify-between sm:justify-center">
      <h1 className="font-cursive sm:text-4xl text-palette1-sunray">{'< '}Felipe F.{' />'}</h1>
      <div>
        <ul role="list" className="font-barlowCondensed text-palette1-sunray text-xl md:flex md:gap-2 sm:hidden">
          <li><a href="#hero" className="hover:text-palette1-platinum transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-palette1-platinum transition-colors">Sobre</a></li>
          <li><a href="#skills" className="hover:text-palette1-platinum transition-colors">Skills</a></li>
          <li><a href="#schollarship" className="hover:text-palette1-platinum transition-colors">Formação</a></li>
          <li><a href="#projects" className="hover:text-palette1-platinum transition-colors">Projetos</a></li>
          <li><a href="#contact" className="hover:text-palette1-platinum transition-colors">Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}