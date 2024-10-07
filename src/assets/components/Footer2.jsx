import React, { useState, useEffect } from "react";
import styled from "styled-components";
import onda from "../images/ondas_b.png";
import logo from "../images/logo.svg";
import { PiPhoneCall } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";

export function Footer2() {
  return (
    <Container>
      <img className="fondo" src={onda} alt="" />
      <div className="cuadro">
        <div className="izq">
          <div className="bajar">
            <div className="titulo">Contacto</div>
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
        <div className="der">
          <img src={logo} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .fondo {
    width: 100%;
    height: 100%;
    max-height: 200px;
  }
  .cuadro {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: white;
    .izq {
      width: 70%;
      height: 100%;
      .bajar {
        margin-left: 10%;
        position: absolute;
        bottom: 15%;
        font-size: 22px;
        line-height: 1.5;
        word-spacing: 2;
        .titulo {
          font-size: 20px;
          font-weight: bold;
        }
        .correo {
          display: flex;
          flex-direction: row;
          place-content: center;
          align-items: center;
          place-items: center;
          .icon {
            display: flex;
            font-size: 18px;
          }
          .mail {
            margin-left: 5px;
            font-size: 18px;
          }
          .social {
            display: flex;
            margin-left: 18px;
          }
        }
        .fono {
          display: flex;
          flex-direction: row;
          align-items: center;
          place-items: center;
          .icon {
            display: flex;
            font-size: 18px;
          }
          .phone {
            margin-left: 5px;
            font-size: 18px;
          }
        }

        a {
          color: white;
          text-decoration: none;
        }
      }
    }
    .der {
      width: 30%;
      height: 100%;
      display: flex;
      place-content: center;
      align-items: center;
      margin-right: 50px;
      img{
        width: 70%;
      }
    }
  }
`;
