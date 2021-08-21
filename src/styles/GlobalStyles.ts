import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --nude-mbh: #FBDBB5;
    --white: #FFFFFF;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{ 
    width: 100%;
    height: 100vh;
    background-color: var(--white);
  }

  *,
  *:after,
  *:before {
      box-sizing: inherit;
  }

  *, button, input{
      border: 0;
      outline: 0;
  }

  a:hover{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;
