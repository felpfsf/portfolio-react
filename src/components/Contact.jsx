export function Contact() {
  return (
    <section id="contact" className="bg-palette1-platinum p-4">
      <h2 className="text-xl text-palette1-onyx font-bold mb-2">
        Contato
      </h2>
      <p className="sm:text-sm md:text-base text-palette1-grayBlue mb-8">
        Quer entrar em contato comigo?<br />
        Preencha o formulário ao lado e entrarei em contato o mais rápido possível.
      </p>
      <form action="" className="">
        <input id="name" type="text" placeholder="Digite seu nome" required className="peer input" />
        <label for="name" className="label">Nome</label>

        <input id="email" type="email" placeholder="Digite seu email" required className="peer input" />
        <label for="email" className="label">E-mail</label>

        <input id="subject" type="text" placeholder="Assunto" required className="peer input" />
        <label for="subject" className="label">Assunto da mensagem</label>

        <textarea id="message" placeholder="Sua mensagem" required className="textarea" />
        <label for="message" className="label">Sua Mensagem</label>

        <button type="submit" className="text-sm text-palette1-platinum bg-palette1-sunray py-3 px-4 w-[150px]">Enviar mensagem</button>
      </form>
    </section>
  )
}