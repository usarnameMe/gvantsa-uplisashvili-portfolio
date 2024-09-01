import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <lottie-player
                src="https://lottie.host/2fcd2cf3-74c9-4b1c-974e-5d2f89a02ba4/SIKzJkgYEW.json"
                background="transparent"
                speed="1"
                style={{ width: "550px", height: "550px" }}
                loop
                autoplay
              ></lottie-player>
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave"></span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> GVANTSA UPLISASHVILI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
