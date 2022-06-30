export function Contact() {
  return (
    <section id="contact" className="bg-palette1-platinum sm:p-4 lg:p-16 lg:flex lg:justify-center lg:gap-20">
      <img src="https://via.placeholder.com/464x593.png?text=Imagem_do_projeto" alt="" className="sm:hidden md:hidden lg:block" />
      <div className="lg:w-1/3 sm:w-full">
        <div>
          <h2 className="text-xl text-palette1-onyx font-bold mb-2">
            Contato teste
          </h2>

          <p className="sm:text-sm md:text-base text-palette1-grayBlue mb-8">
            Quer entrar em contato comigo?<br />
            Preencha o formulário e entrarei em contato.
          </p>
        </div>
        <form action="" className="">
          <input id="name" type="text" placeholder="Digite seu nome" required className="peer input" />
          <label htmlFor="name" className="label">Nome</label>

          <input id="email" type="email" placeholder="Digite seu email" required className="peer input" />
          <label htmlFor="email" className="label">E-mail</label>

          <input id="subject" type="text" placeholder="Assunto" required className="peer input" />
          <label htmlFor="subject" className="label">Assunto da mensagem</label>

          <textarea id="message" placeholder="Sua mensagem" required className="textarea" />
          <label htmlFor="message" className="label">Sua Mensagem</label>

          <button type="submit" className="text-sm text-palette1-platinum bg-palette1-sunray py-3 px-4 w-[150px] primary:bg-palette1-fireOpal transition-colors">Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}