import React, { Component } from "react";

import Cronometro from "./Component/Cronometro";

import GlobalSledy from "./GlobalSledy";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Cronometro />
        <GlobalSledy />
      </>
    );
  }
}
