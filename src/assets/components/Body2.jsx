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
      <Container>
        <Row>
          <Col>
            <section className="selector">
              <Button
                onClick={() => setSelected("PCI")}
                className={selected === "PCI" ? "active" : ""}
              >
                PCI
              </Button>
              <Button
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
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <Especificaciones>{renderSpecifications()}</Especificaciones>
          </Col>
        </Row>
      </Container>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  margin-bottom: 25px;
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
