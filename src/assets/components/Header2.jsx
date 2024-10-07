import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ola from "../images/ondas_a.png";
import logo from "../images/logo.svg";

export function Header2() {
  return (
    <Container>
      <img className="fondo" src={ola} alt="header" />
      <div className="cuadro">
        <div className="izquierda">
          <img className="png" src={logo} />
        </div>
        <div className="derecha">COVEPA AQUACULTURE</div>
      </div>
      {/* <div className="contenedor-banner">
        <img className="fondo" src={ola} alt="" />
        <div className="cuadro">
          <div className="lgo">
            
          </div>
          <div className="texto">COVEPA AQUACULTURE</div>
        </div>
      </div> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
  }
  .cuadro {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    .izquierda {
      width: 30%;
      max-height: 70%;
      height: 70%;
    }
    .derecha {
      width: 70%;
      height: 70%;
      max-height: 70%;
      color: white;
      display: flex;
      place-content: center;
      place-items: center;
      font-size: 30px;
      word-spacing: 10px;
    }
  }
`;
