import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/undraw_feeling_proud.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              IK GA ME EVEN <span className="purple"> VOORSTELLEN </span>
            </h1>
            <p className="home-about-body">
              Ik ben een jongen van 20 jaar die in het derde jaar zit van HBO
              ICT Software Enginering.
              <br />
              <br />
              Ik heb redelijk wat ervaring met de backend talen
              <i>
                <b className="purple"> Java, C#, Python. </b>
              </i>
              Ook heb ik al redelijk wat ervaring met de frontend talen
              <i>
                <b className="purple"> JavaScript, HTML and CSS. </b>
              </i>
              <br />
              <br />
              De laatste tijd gaat mijn interesse steeds meer naar het gebied
              &nbsp;
              <i>
                <b className="purple">van het bouwen van webapplicaties. </b>
                Ik vind het harstikke leuk om zowel aan{" "}
                <b className="purple">de Frontend </b>
                als aan <b className="purple">de Backend </b>
                te werken.
              </i>
              <br />
              <br />
              Ik zou het liefst willen werken met de frameworks{" "}
              <b className="purple">.NET</b> and
              <i>
                <b className="purple"> React </b>
              </i>
              omdat ik daar al wat ervaring mee heb.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              neem gerust <span className="purple">contact </span>met mij op
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jarrelp"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/jarrel_pothoff"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jarrel-pothoff-032533225/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jarrelpothoff/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
