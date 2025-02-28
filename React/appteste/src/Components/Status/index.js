import React, { Component } from "react";

import { Container } from "../../GlobalStyled";

export default class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };

    this.logar = this.logar.bind(this);
    this.deslogar = this.deslogar.bind(this);
  }

  //metodos
  logar() {
    this.setState({ status: true });
  }

  deslogar() {
    this.setState({ status: false });
  }

  render() {
    return (
      <Container>
        {this.state.status ? (
          <>
            <h1>Vc esta lgado</h1>
            <button onClick={this.deslogar}>Deslogar</button>
          </>
        ) : (
          <>
            <h1>Bem vindo, faça o login </h1>
            <button onClick={this.logar}>Logar</button>
          </>
        )}
      </Container>
    );
  }
}
