import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "../../GlobalStyled";

export default class Dados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Fernando",
      contador: 0,
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    let state = this.state;
    if (state.contador === 10) return toast.success("chego a 10");
    state.contador++;
    state.name = "Ferreira";
    this.setState(state);
  }

  diminuir() {
    let state = this.state;
    if (state.contador === 0) return toast.error("chego a zero");
    state.contador--;
    state.name = "Moraes";

    this.setState(state);
  }

  render() {
    return (
      <Container>
        <div>
          <h4> {this.state.name}</h4>
          <h2>Contador</h2>
          <button onClick={this.aumentar}>+</button>
          <h3>{this.state.contador}</h3>
          <button onClick={this.diminuir}>_</button>
          <hr />
        </div>
      </Container>
    );
  }
}
