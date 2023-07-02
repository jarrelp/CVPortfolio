import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hallo iedereen, Ik ben{" "}
            <span className="purple">Jarrel Pothoff </span>
            en woon in <span className="purple"> Pijnacker.</span>
            <br />
            Op dit moment zit ik in het vierde jaar van{" "}
            <span className="purple">HBO-ICT Software Engineering </span>
            en zou graag m'n kennis willen verbreden op het gebied van ICT.
            <br />
            <br />
            Ik heb ook nog leuke hobbies die ik graag doe in mijn vrije tijd!
            Deze hobbies zijn:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Gamen
            </li>
            <li className="about-activity">
              <ImPointRight /> Programmeren
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jarrel</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
