import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
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
        <WaveSVG viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#27357d", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#3777a9", stopOpacity: 1 }} />
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
  padding: 10px 10%;
  color: white;

  .contacto {
    display: flex;
    place-items: center;

    .caja {
      display: flex;
      flex-direction: column;

      h6 {
        font-size: 16px;
        margin-bottom: 10px;
      }

      .correo,
      .fono {
        display: flex;
        align-items: center;
        margin-bottom: 5px; /* Reducimos el margen inferior */

        .icon {
          margin-right: 5px; /* Reducimos el espacio entre el ícono y el texto */
        }

        .mail a,
        .phone a {
          text-decoration: none;
          color: white;
          font-size: 14px;
        }
      }

      .social {
        margin-left: 10px; /* Reducimos el margen entre el correo y LinkedIn */

        a {
          color: white;
          font-size: 18px; /* Ajustamos el tamaño del ícono de LinkedIn */
        }
      }
    }
  }

  .logo .im {
    width: 150px;
  }

  /* Media Queries para pantallas pequeñas */
  @media (max-width: 768px) {
    padding: 10px 5%;

    .contacto .caja {
      h6 {
        font-size: 14px;
      }
      .correo .mail a,
      .fono .phone a {
        font-size: 12px;
      }
      .social a {
        font-size: 16px;
      }
    }

    .logo .im {
      width: 100px;
    }
  }

  /* Ajustes específicos para pantallas muy pequeñas (<400px) */
  @media (max-width: 550px) {
    padding: 10px 3%;

    .contacto .caja {
      h6 {
        margin-bottom: 0;
        font-size: 12px;
      }
      .fono .phone{
        margin-bottom: 0px;
      }
      .correo .mail a,
      .fono .phone a {
        margin-bottom: 0px;
        font-size: 10px;
      }
      .social a {
        font-size: 14px;
      }
    }

    .logo .im {
      width: 150px;
    }
  }
  @media (max-width: 300px) {
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
