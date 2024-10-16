import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ola from "../images/ondas_a.png";
import wave from "../images/wave1.svg";
import wave2 from "../images/wave1.svg";
import logo from "../images/logo.svg";

export function Header2() {
  return (
    <Container>
      <div className="header">
        <div className="content">
          <div className="im">
            <img src={logo} alt="" />
          </div>
          <div className="titulo">
            <h2>COVEPA AQUACULTURE</h2>
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
    </Container>
  );
}

const Container = styled.div`
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
      width: 80%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      top: 25px;
      .im {
        width: fit-content;
        height: fit-content;
        img {
          width: 150px;
          height: auto;
        }
      }
      .titulo {
        position: relative;
        h2 {
          height: 100%;
          place-content: center;
          text-align: justify;
          color: white;
          bottom: -25px;
        }
      }
      z-index: 3;
      @media (max-width: 768px) {
        .im {
          width: fit-content;
          height: fit-content;
          img {
            width: 100px;
            height: auto;
          }
        }
        .titulo {
          h2 {
            font-size: 15px;
            width: 200px;
            text-align: center;
          }
        }
      }
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
        width: 90%;
        .im {
          width: 100%;
          img {
            min-width: 50%;
            width: 70%;
          }
        }
        .titulo {
          width: 100%;
          h2 {
            width: 80%;
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
`;
