import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Logo } from "../components/Logo";
import img_mockup from "../assets/code-mockup.png";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const CREATE_SUBSCRIBE = gql`
  mutation CreateSubscribe($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export function Subscribe() {
  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBE);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome."),
    email: yup
      .string()
      .required("Digite seu Email.")
      .email("Esse email é invalido"),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function formSubmit(data: any) {
    await createSubscriber({
      variables: {
        name: data.name,
        email: data.email,
      },
    });

    navigate("/event");
  }

  return (
    <>
      <div className="min-h-screen w-full bg-blur bg-no-repeat bg-cover flex flex-col items-center">
        <div className="max-w-[1100px] flex lg:flex-row items-center justify-center text-center mx-auto mt-10 lg:mt-20 w-full flex-col lg:justify-between">
          <div className="max-w-[640px] flex flex-col justify-center lg:items-start items-center px-4 lg:text-left">
            <Logo w="200" h="37" />
            <h1 className="mt-6 lg:text-[2.5rem] leading-tight text-2xl">
              Construa uma
              <strong className="text-blue-200"> aplicação completa</strong>, do
              zero, com <strong className="text-blue-200">React</strong>.
            </h1>
            <p className="text-gray-200 my-4 leading-relaxed text-sm opacity-80 lg:text-lg ">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <div className="p-7 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>
            <form
              className="flex flex-col w-full gap-2"
              onSubmit={handleSubmit(formSubmit)}
            >
              <input
                type="text"
                placeholder="Seu nome completo"
                className="bg-gray-900 rounded px-5 h-14 focus:outline-blue-400 outline-none"
                {...register("name")}
              />
              <input
                type="email"
                placeholder="Seu nome completo"
                className="bg-gray-900 rounded px-5 h-14 focus:outline-blue-400 outline-none"
                {...register("email")}
              />
              <button
                type="submit"
                className="bg-blue-500 mt-4 py-5 h-14 uppercase rounded font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-wait"
                disabled={loading}
              >
                {loading ? "Enviando..." : "garantir minha vaga"}
              </button>
            </form>
          </div>
        </div>
        <img
          src={img_mockup}
          className="mt-10 lg:max-w-[1100px] w-full max-w-[90%]"
          alt="code-mockup"
        />
        <footer className="flex items-center gap-4 border-t border-gray-500 justify-center w-full bg-gray-700">
          <div className=" flex items-center justify-center lg:justify-start gap-4 py-5 max-w-[1100px] w-full">
            <span className="text-sm">Desenvolvido por Vinícius Virtuoso</span>
            <Logo w="120" h="37" />
          </div>
        </footer>
      </div>
    </>
  );
}
