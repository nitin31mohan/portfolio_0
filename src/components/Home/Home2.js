import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              Allow me to <span className="purple"> Introduce </span> myself,
            </h1>
            <p className="home-about-body">
              My love for programming stems from my multiple watch-throughs of the movies like 
              <i> Interstellar</i>. 
              <br />
              <br />
              Tell me, were you not impressed as well when TARS 
              <i>
               &nbsp;just knew
              </i> how to analyse the 
              <i>
                &nbsp;Endurance's
              </i> spin? No? Okay.
              <br />
              <br />I am fluent in the classics
              <i>
                <b className="purple"> Python</b>
              </i> and 
              <i>
                <b className="purple"> JavaScript.</b>
              </i>
              <br />
              <br />
              My interest lies in the field of &nbsp;
              <i>
                <b className="purple">Artificial Intelligence </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning, Natural Language Processing
                </b> 
                <b style={{fontWeight: 'normal'}}> and </b>
                <b className="purple">
                  Accessibility
                </b>
                <b style={{fontWeight: "normal"}}>.</b>
              </i>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for development
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" style={{borderRadius:"50%"}} alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Feel free to <span className="purple">connect </span></h1>
            <p>
              Find me on
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nitin31mohan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nitin-mohan-1b676412a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/m.nitin.31/"
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
