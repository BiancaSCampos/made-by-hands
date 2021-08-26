import styled from "styled-components";

export const OuterDiv = styled.div`
  background-color: #fbdbb5;

  width: 100%;
  height: 8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InnerDiv = styled.div`
  width: 75%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  input {
    font-size: 1rem;
    font-family: "Pavanam", sans-serif;
    border-radius: 32px;
    padding: 0.75rem 1rem;
    width: 70%;
    margin: 0rem 2rem; 
  }

  img {
    height: 8rem;
    width: 8rem;
  }
`;
