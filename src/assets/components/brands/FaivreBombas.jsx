import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../images/FaivreBombas/faivrebombas_logo.svg";
import maq_2 from "../../images/FaivreBombas/faivreBombas_maq4.png";
import a from "../../images/FaivreBombas/a.png";
import a_r from "../../images/FaivreBombas/a_r.png";
import b_r from "../../images/FaivreBombas/b_r.png";
import b from "../../images/FaivreBombas/b.png";
import c_r from "../../images/FaivreBombas/c_r.png";
import c from "../../images/FaivreBombas/c.png";
import { Table } from "react-bootstrap";
import ModalImage from "react-modal-image";

export function FaivreBombas() {
  return (
    <Container>
      <div className="contenido">
        <div className="izq" style={{ maxWidth: "300px" }}>
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="grafico">
            <img src={maq_2} />
          </div>
        </div>
        <div className="der">
          <div className="detalle">
            <h4>Características técnicas:</h4>
            <ul>
              <li>
                Carga dinámica mayor. En condiciones normales de operación las
                bombas FAIVRE logran levantar la carga a una altura de hasta 12
                metros, es decir, un 50% más que otros productos homólogos del
                mercado.
              </li>
              <li>
                Menor peso y mayor tamaño de sus ruedas, lo que permite su fácil
                desplazamiento a través de la piscicultura no requiriendo más de
                un operador para su movimiento.
              </li>
              <li>La bomba de 6” pesa aproximadamente 202 Kg.</li>
              <li>La bomba de 8” pesa aproximadamente 550 Kg.</li>
              <li>
                Estos pesos son también muy inferiores a los de similares
                productos en el mercado.
              </li>
              <li>Diseño de cebado ultrarrápido, sencillo y eficiente.</li>
              <li>Control remoto con un alcance de hasta 200 metros.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tabla">
        <Container className="cont">
          <h4 style={{ textAlign: "start" }}>
            Características generales, por tipo de bomba:
          </h4>
          <Table bordered hover responsive className="tablas">
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  Modelo
                </th>
                <th style={{ backgroundColor: "#005a9c", color: "white" }}>
                  30 (6")
                </th>
                <th style={{ backgroundColor: "#005a9c", color: "white" }}>
                  40 (8")
                </th>
                <th style={{ backgroundColor: "#005a9c", color: "white" }}>
                  50 (10")
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Imagen</strong>
                </td>
                <td>
                  <ModalImage small={a_r} large={a} alt="Bomba 30" hideZoom />
                </td>
                <td>
                  <ModalImage small={b_r} large={b} alt="Bomba 40" />
                </td>
                <td>
                  <ModalImage small={c_r} large={c} alt="Bomba 50" />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Caja de control</strong>
                </td>
                <td>Si</td>
                <td>Si</td>
                <td>Si</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Codo de succión</strong>
                </td>
                <td>Φ 150mm (6")</td>
                <td>Φ 200mm (8")</td>
                <td>Φ 250mm (10")</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Motor</strong>
                </td>
                <td>Motoreductor accionamiento directo</td>
                <td>Moto eléctrico 11kW</td>
                <td>Motor eléctrico 18,5kW</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Cuerpo de Bomba</strong>
                </td>
                <td>Acero inoxidable 316 L</td>
                <td>Acero inoxidable AISI 316 L</td>
                <td>Acero inoxidable AISI 316 L</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Caja con soplador acero inox. 316L</strong>
                </td>
                <td>Si</td>
                <td>Si</td>
                <td>Si</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Salida de Bomba</strong>
                </td>
                <td>Φ 150 mm (6")</td>
                <td>Φ 200 mm (8")</td>
                <td>Φ 250 mm (10")</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Bomba cebada</strong>
                </td>
                <td>Si</td>
                <td>Si</td>
                <td>Si</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Cantidad peces Ton/horas</strong>
                </td>
                <td>20 ton/h</td>
                <td>25 ton/h</td>
                <td>50 ton/h</td>
              </tr>
            </tbody>
          </Table>

          <h4 style={{ textAlign: "start" }}>
            Características técnicas, por tipo de bomba:
          </h4>
          <Table bordered hover responsive className="tablas">
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  Modelo
                </th>
                <th style={{ backgroundColor: "#005a9c", color: "white" }}>
                  30 (6")
                </th>
                <th style={{ backgroundColor: "#005a9c", color: "white" }}>
                  40 (8")
                </th>
                <th style={{ backgroundColor: "#005a9c", color: "white" }}>
                  50 (10")
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Motor principal</strong>
                </td>
                <td>3 kW 400V 3HP 50 Hz</td>
                <td>11 kW 400V 3HP 50 Hz</td>
                <td>18,5 kW 400V 3HP 50 Hz</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Control motor principal</strong>
                </td>
                <td>VDF</td>
                <td>VDF</td>
                <td>VDF</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Entrada</strong>
                </td>
                <td>(152 mm) 6 in male Camlock</td>
                <td>(203 mm) 8 in male Camlock</td>
                <td>(250 mm) 10 in male Camlock</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Salida</strong>
                </td>
                <td>(152 mm) 6 in male Camlock</td>
                <td>(203 mm) 8 in male Camlock</td>
                <td>(250 mm) 10 in male Camlock</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Tamaño máximo pez</strong>
                </td>
                <td>700 g Trucha/Salmón</td>
                <td>1500 g Trucha/Salmón</td>
                <td>3000 g Trucha/Salmón</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Carga dinámica total</strong>
                </td>
                <td>12 m (3m succión y 9m descarga)</td>
                <td>15 m (3m succión y 12m descarga)</td>
                <td>12 m – 39 ft</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Dimensiones (m)</strong>
                </td>
                <td>1,76 L x 0,86 W x 1,06 H</td>
                <td>1,74 L x 1,08 W x 1,64 H</td>
                <td>1,59 L x 1,3 W x 1,92 H</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#005a9c",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <strong>Peso</strong>
                </td>
                <td>202 kg – 445 lbs</td>
                <td>550 kg – 1212 lbs</td>
                <td>950 kg – 2095 lbs</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  .contenido {
    margin-bottom: 35px;
    display: flex;
    @media (max-width: 768px) {
      width: 100%;
    }
    .izq {
      width: 50%;
      @media (max-width: 768px) {
        width: 100%;
      }
      .logo {
        display: flex;
        @media (max-width: 768px) {
          display: block;
        }
        img {
          margin-top: 3px;
        }
      }
      .grafico {
        margin-top: 15px;
        width: 100%;
        max-width: 700px;
        display: flex;
        justify-content: center;
        place-content: center;
        align-items: center;
        @media (max-width: 768px) {
          display: flex;
          flex-direction: column;
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .der {
      @media (max-width: 768px) {
      }
      .detalle {
        padding-left: 50px;
        @media (max-width: 768px) {
          padding-left: 0;
        }
        h4 {
          font-weight: bolder;
          text-align: start;
        }
        ul {
          padding: 0; /* Eliminar padding del ul */
          margin: 0; /* Eliminar margin del ul */
          list-style: none; /* Eliminar puntos por defecto */
        }
        li {
          text-align: justify;
          padding-bottom: 5px; /* Ajustar el espaciado entre elementos */
          position: relative; /* Necesario para el pseudo-elemento */
          padding-left: 15px; /* Espaciado para el punto */
        }
        li::before {
          content: "•"; /* Añade un punto manualmente */
          position: absolute;
          left: 0; /* Posición del punto */
          color: #263973; /* Color del punto */
        }
        @media (max-width: 768px) {
          h4 {
            font-size: 16px;
          }
          li {
            font-size: 13px;
          }
        }
      }
    }
  }
  .tabla {
    overflow-x: auto;
    .cont {
      padding: 0px;
      .tablas {
        th,
        td {
          padding: 0.5rem; /* Reduce el padding para móviles */
        }
      }
    }
  }

  @media (max-width: 768px) {
    .logo img {
      width: 40%; /* Ajusta el tamaño de la imagen en pantallas más pequeñas */
    }

    .contenido {
      flex-direction: column; /* Cambia la disposición de los elementos a columnas en pantallas pequeñas */
      align-items: center;

      .grafico {
        width: 100%;
        .subtitulo {
        }
      }
      .grafico,
      .img_maq2 {
      }
      .detalle {
        padding-left: 0; /* Ajusta los espacios */
        text-align: center; /* Centra el texto e imágenes */
      }

      .grafico img,
      .img_maq2 img {
        max-width: 150px; /* Reduce las imágenes en pantallas pequeñas */
      }
    }

    .tabla {
      .cont {
        .tablas {
          th,
          td {
            font-size: 0.8rem; /* Ajusta el tamaño del texto de la tabla */
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .logo img {
      width: 60%; /* Ajusta más el tamaño de la imagen en móviles */
    }

    .contenido {
      .grafico img,
      .img_maq2 img {
        max-width: 120px;
      }
    }

    .tabla {
      .cont {
        .tablas {
          th {
            background-color: "red";
          }
          td {
            font-size: 0.7rem; /* Ajusta aún más el tamaño del texto en móviles */
          }
        }
      }
    }
  }
`;
