import React, { useState } from "react";
import styled from "styled-components";
import { PCI } from "./brands/PCI";
import { Triogen } from "./brands/Triogen";
import { Pinnacle } from "./brands/Pinnacle";
import { Container, Row, Col } from "react-bootstrap";

export function Body2() {
  const [selected, setSelected] = useState("PCI");

  const renderSpecifications = () => {
    switch (selected) {
      case "PCI":
        return <PCI />;
      case "TRIOGEN":
        return <Triogen />;
      case "PINNACLE":
        return <Pinnacle />;
      default:
        return <PCI />;
    }
  };

  return (
    <ContentWrapper>
      <div className="cc">
        <Row className="row">
          <Col className="row">
            <Selector className="selector">
              <Button
                style={{ marginRight: "5px" }}
                onClick={() => setSelected("PCI")}
                className={selected === "PCI" ? "active" : ""}
              >
                PCI
              </Button>
              <Button
                style={{ marginRight: "5px" }}
                onClick={() => setSelected("TRIOGEN")}
                className={selected === "TRIOGEN" ? "active" : ""}
              >
                TRIOGEN
              </Button>
              <Button
                onClick={() => setSelected("PINNACLE")}
                className={selected === "PINNACLE" ? "active" : ""}
              >
                PINNACLE
              </Button>
            </Selector>
          </Col>
        </Row>
        <Row>
          <Col>
            <Especificaciones>{renderSpecifications()}</Especificaciones>
          </Col>
        </Row>
      </div>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1300px; /* Limita el ancho máximo a 1800px */
  margin: 0 auto;
  padding-right: 10%;
  padding-left: 10%;
  margin-top: 50px;

  .cc {
    width: 100%;
    /* Centra el contenido si la pantalla es mayor a 1800px */

    .row {
      margin: 0;
      padding: 0;

      .col {
        margin: 0;
        padding: 0px;
      }
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 50px;
  border: none;
  cursor: pointer;
  background-color: #f0f0f0;
  color: #263973;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    background-color: #263973;
    color: white;
  }
  &.active {
    background-color: #263973;
    color: white;
  }
`;

const Especificaciones = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Selector = styled.section`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center; /* Centra los botones por defecto */

  @media (max-width: 800px) {
    padding: 0;
    margin: 0;
    /*justify-content: flex-start;  Alinea los botones a la izquierda en pantallas pequeñas */
    /* Añade un padding a la izquierda para que no queden pegados al borde */
  }
`;
