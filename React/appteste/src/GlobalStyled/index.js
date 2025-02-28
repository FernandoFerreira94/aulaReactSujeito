import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
    }

    body{
      background-color: wheat;
    }

    h1, h2, h3,h4, h5 {
      margin: 5px 0;
    }    

    button {
      display: block;
      padding: 3px 8px;
      background-color: burlywood;
      border: 1px solid rgb(0,0,0,0.3);
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.2s;
      margin: 10px 0;
      &:hover {
        border: 1px solid rgb(0,0,0,0.8);
      }
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    li {
      margin: 10px 0;
      border-bottom: 1px rgb(116,116,116,0.4) solid;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 5px;
    }

    span {
      margin: 5px 0;
      display: flex;
}
`;

export const Container = styled.section`
  max-width: 60%;
  min-width: 400px;
  background: #fff; // Define a cor de fundo como branco.
  margin: 30px auto; // Define margens de 20px acima/abaixo e 60px nas laterais.
  padding: 30px; // Define o preenchimento de 10px.
  border-radius: 5px; // Define bordas arredondadas com raio de 15px.
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
