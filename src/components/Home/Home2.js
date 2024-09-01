import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I am Gvantsa Uplisashvili, a front-end developer with
              experience in building mobile and web applications.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, and React Native.{" "}
                </b>
              </i>
              <br />
              <br />
              My interests lie in developing innovative web technologies and
              products, and I am deeply involved in areas related to
              <b className="purple"> Artificial Intelligence. </b>
              <br />
              <br />I also enjoy working with <b className="purple">
                Node.js
              </b>{" "}
              and
              <i>
                <b className="purple">
                  {" "}
                  modern JavaScript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js.</b>
              </i>
              <br />
              <br />I am always eager to learn and explore new technologies to
              enhance my skills and contribute to meaningful projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
