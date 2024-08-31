import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1
        className="project-heading"
        style={{
          paddingBottom: "20px",
          background: "linear-gradient(135deg, #c084f5, #8e2de2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "2.5rem",
        }}
      >
        Code Streak: <strong className="purple">My Commitment</strong>
      </h1>
      <GitHubCalendar
        username="usarnameMe"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        style={{
          animation: "fadeIn 1s ease-in-out",
        }}
      />
      <p
        style={{
          color: "#d38bfc",
          fontStyle: "italic",
          fontSize: "1rem",
          marginTop: "10px",
        }}
      >
        These blocks represent the number of contributions I made to GitHub
        over the past year. Hover over a block for details!
      </p>
    </Row>
  );
}

export default Github;
