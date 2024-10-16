import React from "react";
import styled from "styled-components";
import { Table, Container } from "react-bootstrap";
import logo from "../../images/logoPinnacle.png";
import maq from "../../images/pinacle.png";
import maq_2 from "../../images/pinacle_box.png";
import "bootstrap/dist/css/bootstrap.min.css";

export function Pinnacle() {
  return (
    <PinnacleWrapper>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="contenido">
        <div className="grafico">
          <div className="subtitulo">
            <h6>Gama de modulares con capacidades de hasta 30 kg/h</h6>
          </div>
          <div className="img_maq">
            <img src={maq} />
          </div>
        </div>
        <div className="img_maq2">
          <img src={maq_2} />
        </div>
        <div className="detalle">
          <h4>Características técnicas:</h4>
          <ul>
            <li>Celdas de ozono modulares</li>
            <li>Redundancia incorporada</li>
            <li>Diseño ultra compacto</li>
            <li>
              QuadBlock® Cells: Módulos patentados Quadblock® diseñados para un
              alto nivel de redundancia, que elimina completamente los tiempos
              muertos.
            </li>
            <li>Dieléctricos libres de mantención.</li>
            <li>
              Equipo expandible en la medida que se integran más unidades de
              Quadblock®
            </li>
            <li>Fuente de poder silenciosa de alta frecuencia.</li>
            <li>Construcción ultra-resistente.</li>
            <li>Fabricación en USA. </li>
          </ul>
        </div>
      </div>
      <div className="tabla">
        <Container className="cont">
          <Table bordered hover responsive className="tablas">
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: "#ad1517",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  Desempeño
                </th>
                <th style={{ backgroundColor: "#ad1517", color: "white" }}>
                  Peak 5X
                </th>
                <th style={{ backgroundColor: "#ad1517", color: "white" }}>
                  Summit 10X
                </th>
                <th style={{ backgroundColor: "#ad1517", color: "white" }}>
                  Zennith 20X
                </th>
                <th style={{ backgroundColor: "#ad1517", color: "white" }}>
                  Zennith 30X
                </th>
                <th style={{ backgroundColor: "#ad1517", color: "white" }}>
                  Apex 30X
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Concentración
                </td>
                <td colSpan={5}>6-16%BW</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Producción de Ozono (LOX)kg/d @ 10% conc.
                </td>
                <td>Hasta 45.6 kg/d</td>
                <td>Hasta 91.2 kg/d</td>
                <td>Hasta 182.4 kg/d</td>
                <td>Hasta 273.6 kg/d</td>
                <td>Hasta 328.3 kg/d</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Producción de Ozono (V-PSA)kg/d @ 10% conc
                </td>
                <td>Hasta 38.4 kg/d</td>
                <td>Hasta 76.8 kg/d</td>
                <td>Hasta 153.6 kg/d</td>
                <td>Hasta 230.4 kg/d</td>
                <td>Hasta 276.5 kg/d</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Servicio eléctrico
                </td>
                <td colSpan={5}>230V/50hz/3ph</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Consumo
                </td>
                <td>60A (35 FLA)</td>
                <td>110A (79 FLA)</td>
                <td>200A (156FLA)</td>
                <td>300A (234FLA)</td>
                <td>400A (327FLA)</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Eficiencia
                </td>
                <td colSpan={5}>7.8 kWh/kgO3 (LOX) / 8.8 kWh/kgO3 (V-PSA)</td>
              </tr>
              <tr>
                <td
                  colSpan={6}
                  style={{
                    backgroundColor: "#514f4f",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  Requerimientos de oxígeno
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Caudal
                </td>
                <td>465 slpm</td>
                <td>930 slpm</td>
                <td>1860 slpm</td>
                <td>2790 slpm</td>
                <td>2790 slpm</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  LOX
                </td>
                <td colSpan={5}>
                  Dew Point: &lt;-65C, Total Hidrocarburos (como CH4) &lt;15
                  ppm.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  V-PSA
                </td>
                <td colSpan={5}>Concentración de oxígeno ≥ 93%</td>
              </tr>
              <tr>
                <td
                  colSpan={6}
                  style={{
                    backgroundColor: "#514f4f",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  Requerimientos de agua de enfriamiento
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Tipo
                </td>
                <td colSpan={5}>Chiller ciclo cerrado</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Líquido de enfriamiento
                </td>
                <td colSpan={5}>
                  Mezcla Glycol-Agua ( Mezcla 30/70, no incluída)
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  {" "}
                  Caudal de agua
                </td>
                <td>12 gpm</td>
                <td>20 gpm</td>
                <td>40 gpm</td>
                <td>55 gpm</td>
                <td>6 8 gpm</td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Temperatura del agua
                </td>
                <td colSpan={5}>50° - 71°F [10° - 22°C]</td>
              </tr>
              <tr>
                <td
                  colSpan={6}
                  style={{
                    backgroundColor: "#514f4f",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  Otras catacterísticas
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Armazón
                </td>
                <td colSpan={5}>
                  {" "}
                  NEMA 12, enfriada internamente (NEMA 4-4X disponible bajo
                  pedido)
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  Interface de operación
                </td>
                <td colSpan={5}>
                  {" "}
                  15" Red Lion HMI [Otros modelos disponibles bajo pedido]
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#b3b3b3",
                    textAlign: "start",
                  }}
                >
                  PLC
                </td>
                <td colSpan={5}>
                  {" "}
                  Schneider Electric M251 PLC [Otros modelos disponibles bajo
                  pedido]
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </PinnacleWrapper>
  );
}

const PinnacleWrapper = styled.div`
  width: 100%;
  .logo {
    display: flex;
    img {
      width: 20%;
    }
  }
  .contenido {
    display: flex;
    .grafico {
      .subtitulo {
        h6 {
          text-align: start;
          font-weight: normal;
        }
      }
      img {
        width: 100%;
        min-width: 100px;
        max-width: 200px;
        height: auto;
      }
    }
    .img_maq2 {
      img {
        width: 100%;
        min-width: 50px;
        max-width: 100px;
        height: auto;
      }
    }
    .detalle {
      padding-left: 50px;
      h4 {
        font-weight: bolder;
        text-align: start;
        padding-left: 25px;
      }
      li {
        text-align: justify;
        padding-bottom: 15px;
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
  .tabla {
    overflow-x: auto;
    .cont {
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

      .grafico,
      .img_maq2,
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
          th,
          td {
            font-size: 0.7rem; /* Ajusta aún más el tamaño del texto en móviles */
          }
        }
      }
    }
  }
`;
