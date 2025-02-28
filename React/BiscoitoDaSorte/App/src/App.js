import react, { Component } from "react";

import "./estilo.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
    };
    this.frase = [
      "A vida trará coisas boas se tiveres paciência.",
      "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
      "Não compense na ira o que lhe falta na razão.",
      "Defeitos e virtudes são apenas dois lados da mesma moeda.",
      "A maior de todas as torres começa no solo.",
      "Você é do tamanho do seu sonho.",
      "Aquele que se importa com o sentimento dos outros, não é um tolo.",
      "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
      "A juventude não é uma época da vida, é um estado de espírito.",
      "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    ];

    this.handleTextoSorte = this.handleTextoSorte.bind(this);
  }

  handleTextoSorte() {
    let random = Math.floor(Math.random() * this.frase.length);

    this.setState({ textoFrase: '"' + this.frase[random] + '"' });
  }

  render() {
    return (
      <div className="container">
        <img src={require("./img/biscoito.png")} alt="" className="img" />
        <button onClick={this.handleTextoSorte}>Click</button>
        <h3 className="textoFrase"> {this.state.textoFrase}</h3>
      </div>
    );
  }
}
