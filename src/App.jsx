import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header2 } from "./assets/components/Header2";
import { Body2 } from "./assets/components/Body2";
import { Footer2 } from "./assets/components/Footer2";
import fondo from "./assets/images/fondo.jpg";
import "./App.css";

function App() {
  return (
    <Pagina>
      <div className="he">
        <Header2 />
      </div>
      <div className="bo">
        <Body2 />
      </div>
      <div className="fo">
        <Footer2 />
      </div>
    </Pagina>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  .cuerpo {
    width: 100%;
    height: 100%;
    background-color: blue;
    .bod {
      height: 70%;
    }
    .fot {
      height: 30%;
    }
  }
`;

const Pagina = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  align-items: center;
  .he {
    width: 100%;
    height: 15%;
  }
  .bo {
    width: 100%;
    min-height: 70%;
    height: fit-content;
    display: flex;
    place-content: center;
    text-align: center;

    @media only screen and (max-width: 1024px) {
    }
  }
  .fo {
    width: 100%;
    height: 30%;
    max-height: 100px;
  }
`;

export default App;
