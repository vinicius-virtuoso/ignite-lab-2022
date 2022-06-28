import { Logo } from "../components/Logo";

export function Subscribe() {
  return (
    <>
      <div className="min-h-screen w-full bg-blur bg-no-repeat bg-cover flex flex-col items-center">
        <div className="max-w-[1100px] flex items-center justify-center text-center mx-auto mt-10 w-full flex-col">
          <div className="max-w-[640px] flex flex-col justify-center items-center px-4">
            <Logo w="200" h="37" />
            <h1 className="mt-6 lg:text-[2.5rem] leading-tight text-2xl">
              Construa uma
              <strong className="text-blue-200"> aplicação completa</strong>, do
              zero, com <strong className="text-blue-200">React</strong>.
            </h1>
            <p className="text-gray-200 my-4 leading-relaxed text-sm opacity-80">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <div className="p-7 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>
            <form className="flex flex-col w-full gap-2">
              <input
                type="text"
                placeholder="Seu nome completo"
                className="bg-gray-900 rounded px-5 h-14 focus:outline-blue-400 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Seu nome completo"
                className="bg-gray-900 rounded px-5 h-14 focus:outline-blue-400 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 mt-4 py-5 h-14 uppercase rounded font-bold text-sm hover:bg-blue-700 transition-colors"
              >
                garantir minha vaga
              </button>
            </form>
          </div>
        </div>
        <img
          src="/src/assets/code-mockup.png"
          className="mt-10 lg:max-w-[1100px] w-full max-w-full"
          alt="code-mockup"
        />
        <footer className="flex items-center gap-4 border-t border-gray-500 justify-center w-full bg-gray-700">
          <div className=" flex items-center gap-4 py-5 max-w-[1100px] w-full">
            <span className="text-sm">Desenvolvido por Vinícius Virtuoso</span>
            <Logo w="120" h="37" />
          </div>
        </footer>
      </div>
    </>
  );
}
