import React, { Component } from "react";
import { Container } from "../../GlobalSledy";
import { Time } from "../styled";

export default class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: "00",
      seg: "00",
      mil: "00",
      interval: false,
      btnTxt: "Go",
    };
    this.handleGo = this.handleGo.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  handleGo() {
    let state = this.state;
    if (!state.interval) {
      const interval = setInterval(this.updateTime, 10);
      this.setState({ interval });
      state.btnTxt = "Stop";
    } else {
      clearInterval(this.state.interval);
      this.setState({ interval: null });
      state.btnTxt = "Go";
    }
  }

  updateTime() {
    let state = this.state;
    let mil = parseInt(state.mil);
    let seg = parseInt(state.seg);
    let min = parseInt(state.min);

    mil += 1;
    if (mil === 100) {
      mil = 0;
      seg += 1;
    }
    if (seg === 60) {
      seg = 0;
      min += 1;
    }

    this.setState({
      min: min.toString().padStart(2, "0"),
      seg: seg.toString().padStart(2, "0"),
      mil: mil.toString().padStart(2, "0"),
    });
  }

  handleClear() {
    let state = this.state;
    clearInterval(state.interval);
    this.setState({ min: "00", seg: "00", mil: "00", interval: false });
  }

  render() {
    return (
      <Container>
        <h1>Cronometro</h1>
        <img src={require("../../img/assets/cronometro.png")} alt="" />
        <Time>
          <span>
            {this.state.min}:{this.state.seg}:{this.state.mil}
          </span>
        </Time>
        <div>
          <button onClick={this.handleGo}>{this.state.btnTxt}</button>
          <button onClick={this.handleClear}>Zerar</button>
        </div>
      </Container>
    );
  }
}
