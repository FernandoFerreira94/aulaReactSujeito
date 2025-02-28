import React, { Component } from "react";
import { Container } from "../../GlobalStyled";

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { nome: "", email: "", senha: "", sexo: "" },
    };
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail(e) {
    let form = this.state.form;
    form[e.target.id] = e.target.value;
    this.setState({ form: form });
  }

  render() {
    return (
      <Container>
        <h4>Formulario</h4>
        <form>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
            onChange={this.handleEmail}
            value={this.state.form.nome}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="@gmail.com"
            onChange={this.handleEmail}
            value={this.state.form.email}
          />

          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            onChange={this.handleEmail}
            value={this.state.form.senha}
          />

          <label htmlFor="sexo">Sexo:</label>
          <select
            id="sexo"
            value={this.state.form.sexo}
            onChange={this.handleEmail}
          >
            <option value=""></option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>

          <button type="submit">Logar</button>
        </form>
        <span>Nome: {this.state.form.nome}</span>
        <span>Email: {this.state.form.email}</span>

        <span>Senha: {this.state.form.senha}</span>

        <span>Sexo: {this.state.form.sexo}</span>
      </Container>
    );
  }
}
