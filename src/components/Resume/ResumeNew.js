import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

import ContactForm from "./ContactForm";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {
  const [, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <ContactForm />

        <Row
          className="resume"
          style={{ maxHeight: "300px", overflowY: "scroll" }}
        ></Row>
      </Container>
    </div>
  );
}

export default ResumeNew;