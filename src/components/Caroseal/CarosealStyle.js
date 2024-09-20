import styled from "styled-components";



export const Text = styled.div`

h1 {
    font-family: sans-serif;
    text-transform: uppercase;
    font-size: 2em;
    letter-spacing: 4px;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    font-weight: 900;
    animation: animate 5s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 200%;
    }
  }


`