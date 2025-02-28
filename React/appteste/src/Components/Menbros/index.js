import React, { Component } from "react";

import { Container } from "../../GlobalStyled";

export default class Menbro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome,
    };
    this.mudarNome = this.mudarNome.bind(this);
    this.sairNome = this.sairNome.bind(this);
    this.handleNomeInput = this.handleNomeInput.bind(this);
  }

  mudarNome() {
    this.setState({ nome: "Fernando" });
  }

  sairNome() {
    this.setState({ nome: this.props.nome });
  }

  handleNomeInput(e) {
    let nomeNew = document.getElementById("nome").value;
    this.setState({ nome: nomeNew });
    document.getElementById("nome").value = "";
  }

  render() {
    return (
      <Container>
        <h3>Aula 3</h3>
        <h3>
          Seja bem vindo <span>{this.state.nome}</span>{" "}
        </h3>
        <label>
          Nome:
          <input type="text" placeholder="Digite seu nome" id="nome" />
        </label>
        <button onClick={this.handleNomeInput}>Seu nome</button>
        <button onClick={this.mudarNome}>Entrar como Fernando</button>

        <button onClick={this.sairNome}>Sair</button>
        <hr />
      </Container>
    );
  }
}
