import React from "react";
import styled from "styled-components";
import logo from "../images/logo-cropped.svg";
import { PiPhoneCall } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";

export function Footer2() {
  return (
    <Container>
      <FooterContent>
        <div className="contacto">
          <div className="caja">
            <h6>Contacto</h6>
            <div className="correo">
              <div className="icon">
                <LuMail />
              </div>
              <div className="mail">
                <a href="mailto:acuicultura@covepa.org">
                  acuicultura@covepa.org
                </a>
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/company/covepa-acuicola/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="fono">
              <div className="icon">
                <PiPhoneCall />
              </div>
              <div className="phone">
                <a href="tel:+56998743049">+56 9 9874 3049</a>
              </div>
            </div>
          </div>
        </div>
        <div className="logo">
          <div className="im">
            <img src={logo} alt="Logo Covepa" />
          </div>
        </div>
      </FooterContent>
      <WaveContainer>
        <WaveSVG
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
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
            fill="url(#gradient1)"
            fillOpacity="1"
            d="M0,160L60,165.3C120,171,240,181,360,192C480,203,600,213,720,208C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <path
            fill="url(#gradient1)"
            fillOpacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,160C480,139,600,117,720,106.7C840,96,960,96,1080,101.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </WaveSVG>
      </WaveContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const FooterContent = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end; /* Alinea ambos elementos (contacto y logo) al fondo */
  padding: 10px 10%;
  color: white;
  max-width: 1300px; /* Limita el ancho máximo a 1500px */
  margin: 0 auto;
  height: 100%; /* Para garantizar que ambos elementos se alineen al fondo */

  .contacto {
    display: flex;
    place-items: flex-end; /* Mantiene el contenido alineado al fondo */
    height: 100%; /* Para que la caja de contacto siempre llene el espacio */

    .caja {
      display: flex;
      flex-direction: column;
      justify-content: flex-end; /* Mantiene el contenido al fondo de la caja */

      h6 {
        font-size: 16px;
        margin-bottom: 10px;
      }

      .correo,
      .fono {
        display: flex;
        align-items: flex-end;

        .icon {
          margin-right: 5px;
          align-items: flex-end;
        }

        .mail a,
        .phone a {
          text-decoration: none;
          color: white;
          font-size: 14px;
          display: inline-block;
        }
        .phone {
          flex-direction: column; /* Alinea los elementos dentro de .phone en columna */
          justify-content: flex-end;
        }
      }

      .social {
        margin-left: 10px;

        a {
          color: white;
          font-size: 18px;
        }
      }
    }
  }

  .logo {
    position: relative;
    display: flex;
    align-items: flex-end; /* Alinea el logo en la parte inferior */
    height: 100%; /* Mantiene la altura igual a la caja de contacto */

    .im {
      width: 150px; /* Ajusta según el tamaño necesario del logo */
      object-fit: contain;
    }
  }

  /* Media Queries para pantallas pequeñas */
  @media (max-width: 768px) {
    .logo {
      .im {
        width: 100px; /* Ajusta el tamaño en pantallas pequeñas */
      }
    }
  }

  /* Media Queries para pantallas muy pequeñas */
  @media (max-width: 400px) {
    .logo .im {
      display: none;
    }
  }
`;

const WaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 28vh; /* Reduce la altura de la onda aquí */
  z-index: 1;
  margin-top: -10px; /* Puedes ajustar este valor para reducir la separación */
  @media (max-width: 400px) {
    height: 35vh;
  }
  @media (max-width: 550px) {
    height: 35vh;
  }

  @media (max-height: 746px) {
    height: 40vh;
  }
`;

const WaveSVG = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;
