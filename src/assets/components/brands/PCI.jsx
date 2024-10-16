import React from "react";
import styled from "styled-components";
import maq from "../../images/docs.jpeg";

export function PCI() {
  return (
    <PCIWrapper>
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
        <img src={maq} alt="PCI" />
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
    </PCIWrapper>
  );
}

const PCIWrapper = styled.div`
  width: 100%;

  .titulo {
    color: #263973;
    margin-top: 15px;
    margin-bottom: 15px;
    h1 {
      text-align: justify;
      padding: 0;
      margin: 0;
    }
  }

  .subtitulo {
    text-align: justify;
    
    h2 {
      font-weight: 100;
      text-align: justify;
      margin-bottom: 25px;
    }
  }

  .imagen {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%; /* Cambiado a 100% para mayor responsividad */
      max-width: 600px; /* Tamaño máximo de la imagen */
      height: auto; /* Mantener la proporción de la imagen */
    }

    .leyenda {
      text-align: center; /* Centrado de la leyenda */
      width: 70%; /* Mantener proporción con la imagen */
    }
  }

  .propiedades {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 100%;

    .carac {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    ul {
      padding-left: 15px; /* Espaciado para la lista */
    }
  }

  .consulta {
    margin-top: 30px;
    font-size: 25px;
    text-align: center; /* Centrando la consulta */

    h3 {
      font-weight: bold;
    }
  }

  /* Media query para pantallas más pequeñas */
  @media (max-width: 768px) {
    .titulo h1 {
      font-size: 24px; /* Tamaño de fuente ajustado */
    }

    .subtitulo h2 {
      font-size: 20px; /* Tamaño de fuente ajustado */
    }

    .propiedades .carac {
      font-size: 20px; /* Tamaño de fuente ajustado */
    }

    .consulta {
      font-size: 20px; /* Tamaño de fuente ajustado */
    }
  }

  @media (max-width: 581px) {
  width: 80%;
  .titulo h1 {
    font-size: 19px; /* Tamaño de fuente ajustado */
  }

  .subtitulo h2 {
    font-size: 16px; /* Tamaño de fuente ajustado */
  }

  .imagen {
    img {
      width: 70%; /* Cambiado a 100% para mayor responsividad */
      max-width: 600px; /* Tamaño máximo de la imagen */
      height: auto;
    }
  }
  
  .leyenda {
    h3 {
      font-size: 13px;
    }
  }

  .propiedades .carac {
    font-size: 13px; /* Tamaño de fuente ajustado */
  }

  .propiedades ul li {
    font-size: 13px; /* Asegurando que los elementos de la lista tengan este tamaño */
  }

  .consulta {
    font-size: 16px; /* Tamaño de fuente ajustado */
  }
}
`;
