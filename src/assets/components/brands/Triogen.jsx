import React from "react";
import styled from "styled-components";
import { Table, Container } from "react-bootstrap";
import logo from "../../images/logoTriogen_cro.png";
import maq from "../../images/PPO3.png";
import madeIn from "../../images/made in.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

export function Triogen() {
  return (
    <TriogenWrapper>
      <div className="contenido">
        <div className="izq">
          <div className="logo">
            <img src={logo} alt="Logo Triogen" />
          </div>
          <div className="grafico">
            <div className="subtitulo">
              <h6>Gama PPO3-4 con capacidades de hasta 1,2 kg/h</h6>
            </div>
            <div className="img_maq">
              <img src={maq} alt="Máquina PPO3" />
            </div>
            <div className="img_madeIn">
              <img src={madeIn} alt="Made In" />
            </div>
          </div>
        </div>
        <div className="der">
          <div className="detalle">
            <h4>Características técnicas:</h4>
            <ul>
              <li>
                Generación de ozono de efecto corona capaz de producir hasta
                1200 g O3/h con una concentración de hasta el 12 % en masa.
              </li>
              <li>
                La pantalla táctil HMI y el PLC ofrecen control local y
                controles analógicos y digitales remotos, así como una matriz de
                concentración y rendimiento de ozono de última generación,
                tendencias energéticas y calculadora de OPEX.
              </li>
              <li>
                Disponible en dos versiones diferentes que se adaptan a las
                necesidades: el producto insignia PPO3 (controles locales y
                remotos de tipo análogo y digital, con matriz de
                rendimiento/concentración y calculadora de OPEX/tendencias) y
                PPO3-Lite (controles locales y remotos de tipo análogo).
              </li>
              <li>
                También está disponible en un completo sistema montado sobre
                plataforma y listo para usar, con una bomba de partida y una
                válvula de inyección – PPO3-Flex.
              </li>
              <li>
                Gas de alimentación de oxígeno (90-99 % en masa) o de aire seco.
              </li>
              <li>Ozono de presión positiva refrigerado por agua.</li>
              <li>
                Opción de alertas tipo SMS (versión PPO3 tradicional solamente)
              </li>
              <li>
                Circuitos de ozono controlados por separado: PPO3-8 (2 circuitos
                de 240 g), PPO3-16 (4 circuitos de 240 g), que proporcionan
                redundancia integrada y reserva de servicio.
              </li>
              <li>Fabricación en el Reino Unido.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tabla">
        <Container className="tc">
          <Table bordered hover responsive className="tabla">
            <thead>
              <tr>
                <th rowSpan="2">Modelo</th>
                <th colSpan="2">Salida de ozono nominal (g/h)</th>
                <th colSpan="2">Presión de entrada nominal (bares g)</th>
                <th rowSpan="2">
                  Flujo de agua de refrigeración con una entrada de 12°C y un
                  aumento de la temperatura de 5°C (m³/h)
                </th>
                <th rowSpan="2">
                  Potencia de la fuente de alimentación (v ±10 v) / fase / Hz
                </th>
                <th rowSpan="2">Consumo de potencia nominal (kW)</th>
              </tr>
              <tr>
                <th>Oxígeno (10 % en masa de O₃)</th>
                <th>Gas de alimentación de aire seco (4 % en masa de O₃)</th>
                <th>Oxígeno (10 % en masa de O₃)</th>
                <th>Gas de alimentación de aire seco (4 % en masa de O₃)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PPO₃-1</td>
                <td>60</td>
                <td>25</td>

                <td>3/1</td>
                <td>4/2</td>
                <td>0.13</td>
                <td>230 / 1 / 50-60</td>
                <td>0.7</td>
              </tr>
              <tr>
                <td>PPO₃-2</td>
                <td>120</td>
                <td>50</td>

                <td>3/1</td>
                <td>4/2</td>
                <td>0.26</td>
                <td>230 / 1 / 50-60</td>
                <td>1.3</td>
              </tr>
              <tr>
                <td>PPO₃-4</td>
                <td>240</td>
                <td>100</td>
                <td>3/1</td>
                <td>4/2</td>
                <td>0.51</td>
                <td>230 / 1 / 50-60</td>
                <td>2.2</td>
              </tr>
              <tr>
                <td>PPO₃-8</td>
                <td>480</td>
                <td>190</td>
                <td>3/1</td>
                <td>4/2</td>
                <td>1.02</td>
                <td>400-480 / 3 / 50-60</td>
                <td>4.4</td>
              </tr>
              <tr>
                <td>PPO₃-16</td>
                <td>960</td>
                <td>380</td>
                <td>3/1</td>
                <td>4/2</td>
                <td>2.05</td>
                <td>400-480 / 3 / 50-60</td>
                <td>8.8</td>
              </tr>
              <tr>
                <td>PPO₃-Flex-2</td>
                <td>120</td>
                <td>-</td>
                <td>3/1</td>
                <td>-</td>
                <td>0.26</td>
                <td>230 / 1 / 50-60</td>
                <td>4.0</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </TriogenWrapper>
  );
}

const TriogenWrapper = styled.div`
  width: 100%;
  .contenido {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      width: 100%;
      flex-direction: row;
    }
    .izq {
      display: flex;
      flex-direction: column;
      margin-right: 40px;
      @media (max-width: 768px) {
        width: 100%;
      }
      .logo {
        margin-top: 3px;
        display: flex;
        @media (max-width: 768px) {
          width: 100%;
          justify-content: center;
        }
        img {
        }
        @media (max-width: 768px) {
          img {
            width: 150px;
          }
        }
      }
      .grafico {
        width: 100%;
        display: flex;
        flex-direction: column;

        .subtitulo {
          width: 100%;
          h6 {
            margin-top: 25px;
            margin-bottom: 25px;
            text-align: justify;
            justify-content: center;
            font-weight: normal;
          }
          @media (max-width: 768px) {
            h6 {
              text-align: center;
              font-size: 16px;
            }
          }
        }

        .img_maq {
          img {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
          }
          @media (max-width: 768px) {
            img {
              width: 180px;
            }
          }
        }

        .img_madeIn {
          display: flex;
          align-items: start;
          justify-content: center;
          img {
            width: 40%;
          }
        }
      }
    }

    .detalle {
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
        margin-bottom: 15px;
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
        ul li {
          padding: 0; /* Eliminar padding para móviles */
          margin: 0; /* Eliminar margin para móviles */
          font-size: 13px;
          padding-left: 9px;
          margin-bottom: 10px; /* Espaciado entre los elementos */
        }
      }
    }
  }

  .tabla {
    .tc {
      padding: 0;
      margin: 0;
    }
    margin-top: 30px;
    th {
      place-content: center;
      background-color: #1a6fba;
      border: 1px solid white;
      border-radius: 3px;
      color: white;
      font-size: small;
      font-weight: normal;
    }

    td {
      text-align: center; /* Alineación de celdas */
    }
  }
`;
