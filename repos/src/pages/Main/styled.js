import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  background-color: #ffff;
  padding: 20px;
  max-width: 600px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  border-radius: 5px;
  margin: 50px auto;
  box-shadow: 0 0 10px black;

  h2 {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;

  input {
    width: 100%;
    border: 1px solid ${(props) => (props.error ? "#ff0000" : "#eee")};
    padding: 3px 5px;
    border-radius: 5px;
    font-size: 14px;
    height: 25px;
    margin-right: 5px;
    &:focus {
      border: 1px solid black;
    }
  }
`;

const rotate = keyframes`
from{
    transform: rotate(0deg);

}

to{
   transform: rotate(360deg);
}
`;

export const BtnSubmit = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background-color: #0d2636;
  border-radius: 2px;
  border: none;
  padding: 6px 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Lista = styled.ul`
  list-style: none;
  margin-top: 10px;
  width: 100%;

  li {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }
  }
  a {
    color: #0d2636;
    text-decoration: none;
  }
`;

export const DeleteBtn = styled.button.attrs({ type: "button" })`
  margin-right: 10px;
  background-color: transparent;
  color: #0d2636;
  border: 0;
`;
