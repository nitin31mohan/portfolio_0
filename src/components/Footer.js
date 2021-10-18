import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Designed and developed by 
            <b className="purple">
              &nbsp;Nitin Mohan
            </b>
          </h3>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3>Copyright © {year} NM</h3>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Footer;
