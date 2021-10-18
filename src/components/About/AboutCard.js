import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Nitin Mohan </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />I am pursuing an 
              <span className="purple">&nbsp;MSc in Artificial Intelligence </span>  
            <br />from the 
              <span className="purple">&nbsp;University of Southampton</span>&nbsp;in the UK. 
            <br />
            <br />
            Other than coding, other activities that interest me are,
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Start. Where you are. With what you have."{" "}
          </p>
          <footer className="blockquote-footer">Arthur Ashe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
