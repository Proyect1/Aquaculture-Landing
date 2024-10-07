import React, { useState, useEffect } from "react";
import styled from "styled-components";
import maq from "../images/docs.jpeg";

export function Body2() {
  return (
    <Container>
      <div className="titulo">
        <h1>CONOCE NUESTRAS NUEVAS SOLUCIONES DE OXIGENACIÓN.</h1>
      </div>
      <div className="subtitulo">
        <h2>
          Nueva gama de equipos con tecnología VSA. Ahora más eficientes y con
          mayores capacidades.
        </h2>
      </div>

      <div className="imagen">
        <img src={maq} />
        <div className="leyenda">
          <h3>DOCS 2500 LPM</h3>
        </div>
      </div>

      <div className="propiedades">
        <div className="carac">Características:</div>
        <ul>
          <li>Tecnología VSA</li>
          <li>90% - 96% de pureza</li>
          <li>Rango de temperatura desde -18° a 49° C</li>
          <li>Presión de salida: 20 a 100 psig</li>
        </ul>
      </div>
      <h3 className="consulta">
        Además, Consulta por nuestras versiones para 80, 200, 500 y 5000 LPM!
      </h3>
    </Container>
  );
}

const Container = styled.div`
  width: 70%;
  margin-top: 25px;
  display: block;
  .titulo {
    width: 100%;
    text-align: start;
    color: #263973;
  }
  .subtitulo {
    width: 100%;
    text-align: justify;
    word-spacing: 1px;
    h2 {
      font-weight: 100;
    }
  }
  .imagen {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    img {
      width: 70%;
      margin: 0;
      padding: 0;
    }
    .leyenda {
      text-align: end;
      width: 70%;
      margin: 0;
      padding: 0;
    }
  }
  .propiedades {
    margin: 0;
    padding: 0;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    text-align: start;
    place-content: start;
    width: 100%;
    .carac {
      font-size: 25px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 5px;
    }
    ul {
      margin: 0;
      padding: 0;
      padding-left: 15px;
    }
  }
  .consulta {
    text-align: start;
    font-size: 25px;
  }
  margin-bottom: 50px;
`;
