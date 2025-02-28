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
  gap: 5px;

  input {
    width: 60%;
    border: 1px solid #ddd;
    padding: 3px 5px;
    border-radius: 5px;
    font-size: 14px;
    height: 25px;

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
  border-radius: 5px;
  border: none;
  padding: 0 6px;
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
