import styled from "styled-components";

export const Contenedor = styled.div`
  min-height: 100vh;
  position: relative;

  .capa-oculta {
    transition: all 1s ease;
    position: absolute;
    top: -100%;
    width: 100%;
    height: 100%;
    background-color: #1c1c1d;
    opacity: 0.8;
  }

  .capa {
    position: absolute;
    transition: all 1s ease;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1c1c1d;
    opacity: 0.8;
  }

  .shop-oculta {
    transition: all 1s ease;
    position: absolute;
    z-index: 2;
    top: -100%;
  }

  .shop {
    transition: all 1s ease;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .button {
    position: absolute;
    z-index: 2;
    top: 80%;
    margin: 0 30px;
    button {
      padding: 20px 40px;
      color: white;
      font-size: 20px;
      font-weight: bold;
      border: none;
      border-radius: 20px;
      background-color: #c1121f;
      transition: all 200ms ease-out;

      &:hover {
        cursor: pointer;
        -webkit-box-shadow: 0px 0px 39px -3px rgba(193,18,31,1);
        -moz-box-shadow: 0px 0px 39px -3px rgba(193,18,31,1);
        box-shadow: 0px 0px 39px -3px rgba(193,18,31,1);
      }
    }
  }
`;
