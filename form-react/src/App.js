import Header, { MemoHeader } from "./Header";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define o esquema de validação com zod
const schema = z.object({
  name: z.string().nonempty("Campo obrigatorio"),
  email: z
    .string()
    .nonempty("Campo obrigatorio")
    .email("Digite um email valido"),
  userName: z
    .string()
    .nonempty("Campo obrigatorio")
    .min(3, "o userName deve ter 3 caracteres")
    .max(10, "o userName deve ter 10 caracters"),
  telefone: z.string().refine((value) => /^\d{2} ?\d{9}$/.test(value), {
    message: "Digite dd + 9 numeros",
  }),
});

function App() {
  const [name, setName] = useState(""); // Define o estado 'name' com useState
  const [nome, setNome] = useState("");

  const {
    register, // Função para registrar os campos do formulário
    handleSubmit, // Função para lidar com o envio do formulário
    reset, // Função para resetar os campos do formulário
    formState: { errors }, // Estado de erros do formulário
  } = useForm({
    resolver: zodResolver(schema), // Usa o zodResolver para validação com o esquema definido
  });

  function handleSave(data) {
    setNome(data.name);

    reset(); // Reseta os campos do formulário
  }

  return (
    <>
      <div className="content">
        <div className="header">
          <h1>React</h1>
          <Header nome={nome} />
        </div>

        <div className="container-form">
          <form onSubmit={handleSubmit(handleSave)}>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
              id="name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
            <input
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
              id="email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <input
              type="text"
              placeholder="Digite seu userName"
              {...register("userName")}
              id="userName"
            />
            {errors.userName && (
              <p className="error">{errors.userName.message}</p>
            )}

            <input
              type="text"
              placeholder="(ddd) *** *** ***"
              {...register("telefone")}
              id="telefone"
            />
            {errors.telefone && (
              <p className="error">{errors.telefone.message}</p>
            )}
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>

      <hr />

      <div className="content">
        <div className="header">
          <h1>Memo</h1>
          <MemoHeader name={name} />
        </div>
        <div className="container-form">
          <form>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
