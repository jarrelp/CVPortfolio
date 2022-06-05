import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiUbuntu,
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiKubernetes,
  SiDocker,
  SiVisualstudio,
  SiMicrosoftsqlserver,
  SiGitkraken,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiGitkraken />
      </Col>
    </Row>
  );
}

export default Toolstack;
