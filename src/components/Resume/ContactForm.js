import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSoundcloud,
} from "react-icons/fa";
import pdf from "../../Assets/gvantsa-uplisashvili.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_pn2pfqb",
        "template_9i11hio",
        formData,
        "xJK-LZaTWrshb4bnA"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully");

          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="contact-form-container">
      <Row className="contact-form">
        <Col md={6} className="contact-form-left">
          <h2>Contact Me</h2>
          <p>
            Get in touch and let me know how I can help. Fill out the form and
            I’ll be in touch as soon as possible.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                style={{ pointerEvents: "auto", zIndex: 20 }}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Your Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                style={{ pointerEvents: "auto", zIndex: 20 }}
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Your Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{ pointerEvents: "auto", zIndex: 20 }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-button">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={6} className="contact-details">
          <ul>
            <li>
              <FaEnvelope /> gvanca.uplisashvili@gmail.com
            </li>
            <li>
              <FaPhone /> +995599698289
            </li>
          </ul>
          <div className="contact-icons">
            <a
              href="https://github.com/usarnameme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/gvantsa-uplisashvili-57b543253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://www.instagram.com/gvn_uplisashvili/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://soundcloud.com/gvanca-uplisashvili"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSoundcloud className="icon" />
            </a>
          </div>

          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{
              marginTop: "20px",
              maxWidth: "250px",
              display: "block",
              color: "6f42c1"
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ContactForm;