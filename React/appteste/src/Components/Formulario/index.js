import React, { Component } from "react";
import { toast } from "react-toastify";

import { Container } from "../../GlobalStyled";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
    };

    this.handleValue = this.handleValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Criar referências para os inputs
    this.nomeRef = React.createRef();
    this.emailRef = React.createRef();
    this.senhaRef = React.createRef();
  }

  handleValue(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { nome, email, senha } = this.state;
    if (nome !== "" && email !== "" && senha !== "") {
      toast.success("Cadastro com sucesso");
      document.getElementById("spanNome").innerHTML = nome;
      document.getElementById("spanEmail").innerHTML = email;
      document.getElementById("spanSenha").innerHTML = senha;

      // Limpar os campos de input usando referências
      this.nomeRef.current.value = "";
      this.emailRef.current.value = "";
      this.senhaRef.current.value = "";
    } else {
      toast.error("Preencha todos os campos");
    }
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          Nome:
          <input
            type="text"
            id="nome"
            value={this.state.nome}
            onChange={this.handleValue}
            ref={this.nomeRef}
          />
          Email:
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleValue}
            ref={this.emailRef}
          />
          Senha:
          <input
            type="password"
            id="senha"
            value={this.state.senha}
            onChange={this.handleValue}
            ref={this.senhaRef}
          />
          <button type="submit">Enviar</button>
        </form>
        <span id="spanNome"></span>
        <span id="spanEmail"></span>
        <span id="spanSenha"></span>
      </Container>
    );
  }
}
