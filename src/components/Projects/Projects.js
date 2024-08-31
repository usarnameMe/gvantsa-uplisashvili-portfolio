import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import quiz1 from "../../Assets/Projects/quiz1.png";
import uber1 from "../../Assets/Projects/uber1.png";
import shop1 from "../../Assets/Projects/shop1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{marginTop: "20px"}}>
          My <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Explore few peace from my work.
        </p>
        <Row className="project-grid">
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uber1}
              isBlog={false}
              title="Uber Eats Clone App"
              description="A clone of the Uber Eats app with real-time restaurant browsing and order tracking."
              ghLink="https://github.com/usarnameMe/Uber-app"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop1}
              isBlog={false}
              title="E-commerce Platform"
              description="An e-commerce platform built with Node.js, including authentication, product listings, and a shopping cart."
              ghLink="https://github.com/usarnameMe/NodeJS-learning"
              demoLink="https://gvns-node.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz1}
              isBlog={false}
              title="Quiz Application"
              description="An interactive quiz app built with React Native featuring multiple-choice questions, feedback, and scoring."
              ghLink="https://github.com/usarnameMe/QuizApp"
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
