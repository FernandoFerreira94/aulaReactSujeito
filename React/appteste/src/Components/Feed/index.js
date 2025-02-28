import React, { Component } from "react";

import { Container } from "../../GlobalStyled";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          userName: "Fernando",
          curtidas: 10,
          comentarrios: 2,
        },
        {
          id: 2,
          userName: "Matheus",
          curtidas: 120,
          comentarrios: 22,
        },
        {
          id: 3,
          userName: "Marcos",
          curtidas: 87,
          comentarrios: 10,
        },
        {
          id: 4,
          userName: "Maria",
          curtidas: 1,
          comentarrios: 1,
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <ul>
          {this.state.feed.map((item) => {
            return (
              <li key={item.id}>
                <p> Nome: {item.userName}</p>
                <a href="">
                  {item.curtidas}
                  {item.curtidas > 1 ? " curtidas" : " curtida"}{" "}
                  {item.comentarrios}
                  {item.comentarrios > 1 ? " comentarios" : " comentario"}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }
}
