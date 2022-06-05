import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiCsharp,
  SiHtml5,
  SiBootstrap,
  SiJava,
  SiDotnet,
  SiCss3,
  SiMaterialui,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiJava />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiDotnet />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMaterialui />
      </Col>
    </Row>
  );
}

export default Techstack;
