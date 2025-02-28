import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body{
  display: flex;
  align-items: center;
  justify-content: center;
}
button{
    padding: 4px 8px;
    background-color: white;
    border-radius:8px;
    border: 1px solid rgb(0,0,0,0.6);
    margin: 5px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover{
      opacity: 0.7;
      color: black;
    }
  }
    `;

export const Container = styled.section`
  margin: 30px;
  width: 70% auto;
  border: 1px solid rgb(116, 116, 116, 0.6);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00aeef;
  position: relative;

  img {
    width: 300px;
    margin: 5%;
  }
`;
