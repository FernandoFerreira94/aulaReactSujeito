import React, { Component } from "react";
import { ToastContainer } from "react-toastify";

import GlobalStyled from "./GlobalStyled";

import Dados from "./Components/Dados";
import Horas from "./Components/Horas";
import Menbro from "./Components/Menbros";
import Status from "./Components/Status";
import Feed from "./Components/Feed";
import Cadastro from "./Components/Cadastro";
import Formulario from "./Components/Formulario";
import ApiUseState from "./Components/ApiUseState";

export default class App extends Component {
  render() {
    return (
      <div>
        <Dados />
        <Horas />
        <Menbro nome="Visitante" />
        <Status />
        <Feed />
        <Cadastro />
        <Formulario />
        <ApiUseState />
        <GlobalStyled />
        <ToastContainer />
      </div>
    );
  }
}
