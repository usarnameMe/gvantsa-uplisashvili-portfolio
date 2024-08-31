import React from "react";
import { Row,  } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function AboutCard() {
  return (
    <div className="about-section">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Coding Journey</strong>
        </h1>
        <GitHubCalendar
          username="usarnameMe"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>
    </div>
  );
}

export default AboutCard;
