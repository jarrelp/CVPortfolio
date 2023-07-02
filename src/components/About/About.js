import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/undraw_profile.svg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              WEET JE WIE <strong className="purple">IK BEN?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={7}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">programeertalen & frameworks </strong> waar
          ik al wat ervaring mee heb
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> die ik gebruik
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;