import React from "react";

const skills = [
  "Mobile Developer",
  "Web Developer",
  "Freelancer",
  "AI Enthusiast",
];

function VerticalCarousel() {
  return (
    <div className="vertical-carousel">
      {skills.map((skill, index) => (
        <div className="carousel-item" key={index}>
          {skill}
        </div>
      ))}
    </div>
  );
}

export default VerticalCarousel;
