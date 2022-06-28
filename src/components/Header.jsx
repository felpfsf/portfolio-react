export function Header() {
  return (
    <nav className="p-4 border-b mx-1 mb-8 border-palette1-alabaster flex items-center justify-between">
      <h1 className="font-cursive text-2xl text-palette1-sunray">Felipe F.</h1>
      <div>
        <ul role="list" className="font-barlowCondensed text-palette1-sunray text-base flex gap-2">
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