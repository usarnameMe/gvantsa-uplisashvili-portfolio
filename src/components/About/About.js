import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Toolstack />
        <Row
          className="quote-card-view"
          style={{ marginTop: "100px", marginBottom: "10px" }}
        >


          <Col md={4}>
            <lottie-player
              src="https://lottie.host/8db1b010-ae0d-4932-8598-1ba19d564b4a/b7v9FQdvFD.json"  
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </Col>

          <Col md={8}>
            <Card.Body>
              <h2 className="project-heading">
                About <strong className="purple">Me</strong>
              </h2>
              <p style={{ textAlign: "justify", fontSize: "1.1rem" }}>
                Hi! I’m <strong className="purple">Gvantsa Uplisashvili</strong>
                , a frontend developer based in{" "}
                <strong className="purple">Tbilisi, Georgia</strong>, with a
                passion for mobile development and artificial intelligence.
                <br />
                <br />I specialize in{" "}
                <strong className="purple">React Native</strong> and{" "}
                <strong className="purple">Node.js</strong> and love exploring
                new technologies that push the boundaries of web and mobile
                development. Currently, I am diving deep into<strong className="purple"> Python </strong> and
                scripting, fueling my interests in <strong className="purple">AI development.</strong>
                <br />
                <br />
                My journey has included working as a React Native developer at
                Concept Digital and contributing to AI research projects as part
                of the Artificial Intelligence Association of Georgia (GAIA).
              </p>
            </Card.Body>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px", minHeight: "100px", }}
            className="about-img"
          >
            <lottie-player
              src="https://lottie.host/5df70e28-0629-4983-865d-b529cfdb6cac/TPs8KDGM34.json"  
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px", marginLeft:"130px" }}
              loop
              autoplay
            ></lottie-player>
          </Col>
        </Row>


      </Container>
    </Container>
  );
}

export default About;
