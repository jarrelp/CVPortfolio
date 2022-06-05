import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import trackonline from "../../Assets/Projects/trackonline.png";
import groenagrocontrol from "../../Assets/Projects/groenagrocontrol.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ProductTourImg from "../../Assets/undraw_product_tour.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="center">
            <h1 className="project-heading">
              Mij huidige <strong className="purple">Werkervaring </strong>
            </h1>
            <p style={{ color: "white" }}>
              Hier zijn een paar bedrijven waar ik voor ik heb gewerkt
            </p>
          </Col>
          <Col
            md={8}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={ProductTourImg}
              alt="product tour image"
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={trackonline}
              isBlog={false}
              title="Bexter"
              description="Ik heb een half jaar full time als een backend developer gewerkt voor Bexter."
              link="https://www.bexter.nl/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={groenagrocontrol}
              isBlog={false}
              title="Groen Agro Control"
              description="Ik heb een half stage gelopen bij Groen Agro Control als een backend developer."
              link="https://agrocontrol.nl/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
