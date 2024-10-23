import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ola from "../images/ondas_a.png";
import wave from "../images/wave1.svg";
import wave2 from "../images/wave1.svg";
import logo from "../images/logo-cropped.svg";

export function Header2() {
  return (
    <CONT>
      <div className="header">
        <div className="content">
          <div className="im">
            <img src={logo} alt="" />
          </div>
          <div className="titulo">
            <h2>
              <span>COVEPA</span>
              <span> AQUACULTURE</span>{" "}
            </h2>
          </div>
        </div>
        <div className="wv_bottom">
          <svg
            className="w1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#27357d", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#3777a9", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>

            <path
              fill="url(#grad1)"
              d="M0,64L80,69.3C160,75,320,85,480,117.3C640,149,800,203,960,197.3C1120,192,1280,128,1360,96L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            />
          </svg>
          <svg
            className="w2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#27357d", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#27357d", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#grad2)"
              d="M0,256L80,256C160,256,320,256,480,234.7C640,213,800,171,960,176C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    </CONT>
  );
}

const CONT = styled.div`
  width: 100%;
  height: 120px;

  .header {
    width: 100%;
    height: 70px;
    background: linear-gradient(to right, #27357d, #3777a9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .content {
      position: relative;
      width: 100%;
      max-width: 1300px; /* Limita el ancho máximo a 1800px */
      margin: 0 auto; /* Centra la sección si el contenedor es más ancho */
      padding-left: 10%;
      padding-right: 10%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      top: 25px;

      .im {
        width: fit-content;
        height: fit-content;
        img {
          padding-top: 9px;
          width: 150px;
          height: auto;
        }
      }

      .titulo {
        position: relative;
        margin: 0; /* Elimina margen por defecto del h2 */
        padding: 0;
        h2 {
          margin: 0; /* Elimina margen por defecto del h2 */
          padding: 0;
          height: 100%;
          place-content: top center;
          text-align: justify;
          color: white;
          bottom: -25px;
          display: flex;
          span:first-child {
            margin: 0; /* Elimina margen por defecto del h2 */
            padding: 0;
            height: fit-content;
            text-align: left;
            margin-right: 15px;
          }

          span:last-child {
            margin: 0; /* Elimina margen por defecto del h2 */
            padding: 0;
            text-align: right; /* Alinea la segunda línea a la derecha */
          }
        }
      }

      z-index: 3;

      /* @media (max-width: 768px) {
        .im {
          img {
            width: 100px;
            height: auto;
          }
        }

        .titulo {
          width: fit-content;
          height: fit-content;
          place-content: left;

          background-color: red;
          h2 {
            width: 25px;
            color: #27357d;
            font-size: 19px;
          }
        }
      } */
    }

    .wv_bottom {
      width: 100%;
      position: relative;

      .w1 {
        position: absolute;
        width: 100%;
        height: 80px;
        top: -25px;
        z-index: 2;
      }

      .w2 {
        position: absolute;
        width: 100%;
        height: 80px;
        top: -15px;
        z-index: 1;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    .header {
      .content {
        width: 100%;

        .im {
          width: 100%;
          img {
            min-width: 50%;
            width: 70%;
          }
        }

        .titulo {
          display: flex;
          flex-direction: column; /* Coloca los spans uno encima del otro */
          width: 100%;
          align-items: right; /* Centra el contenido horizontalmente */

          h2 {
            width: 100%;
            margin: 0;
            white-space: normal;
            word-wrap: break-word;
            display: flex;
            flex-direction: column;
            span:first-child {
              text-align: right;
              padding-right: 15%; /* Centra la primera línea */
              width: 100%; /* Asegura que ocupe todo el ancho */
            }

            span:last-child {
              text-align: right; /* Alinea la segunda línea a la derecha */
              width: 100%; /* Asegura que ocupe todo el ancho */
            }
          }
        }
      }

      .wv_bottom {
        width: 100%;
        .w1 {
          top: -35px;
          width: 100%;
        }
        .w2 {
          top: -20px;
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 650px) { /* Media query para pantallas menores a 50px */
    .header {
      .content {
        .titulo {
          h2 {
            span:first-child {
              padding-right: 19%; /* Cambia padding-right a 18% */
            }
          }
        }
      }
    }
  }
  @media (max-width: 480px) { /* Media query para pantallas menores a 50px */
    .header {
      .content {
        .titulo {
          h2 {
            span:first-child {
              padding-right: 22%; /* Cambia padding-right a 18% */
            }
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .header {
      .content {
        top: 10px; /* Reduce la distancia desde el borde superior */
      }
    }
  }

  @media (max-width: 396px) {
    .header {
      .content {
        .im {
          img {
            width: 87.23px;
          }
        }

        .titulo {
            h2 {
              
            span:first-child {
              font-size: 19px;
            }
            span:last-child {
              font-size: 19px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 396px) {
    .header {
      .content {
        .im {
          img {
            padding: 0;
            width: 87.23px;
          }
        }

        .titulo {
            h2 {
              padding-top: 0;
            span:first-child {
              padding-top: 0;
              font-size: 15px;
            }
            span:last-child {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
`;
