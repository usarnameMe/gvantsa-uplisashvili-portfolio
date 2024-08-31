import React from "react";
import styled, { keyframes } from "styled-components";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiCss3,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";
import { DiNodejs, DiPython, DiGit } from "react-icons/di";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const SkillsSlider = styled.div`
  display: flex;
  animation: ${scroll} 20s linear infinite;
  width: 200%;
`;

const SkillCard = styled.div`
  min-width: 150px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  margin: 10px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  svg {
    color: #c084f5;
    font-size: 4rem;
    margin-bottom: 10px;
  }

  h5 {
    color: white;
    font-size: 1.2rem;
  }
`;

function Toolstack() {
  return (
    <SkillsContainer>
      <SkillsSlider>
        <SkillCard>
          <SiJavascript />
          <h5>Javascript</h5>
        </SkillCard>
        <SkillCard>
          <SiTypescript />
          <h5>Typescript</h5>
        </SkillCard>
        <SkillCard>
          <SiReact />
          <h5>React</h5>
        </SkillCard>
        <SkillCard>
          <SiNextdotjs />
          <h5>Next.js</h5>
        </SkillCard>
        <SkillCard>
          <SiTailwindcss />
          <h5>Tailwind</h5>
        </SkillCard>
        <SkillCard>
          <SiMongodb />
          <h5>MongoDB</h5>
        </SkillCard>
        <SkillCard>
          <SiCss3 />
          <h5>CSS</h5>
        </SkillCard>

        <SkillCard>
          <DiNodejs />
          <h5>Node.js</h5>
        </SkillCard>
        <SkillCard>
          <DiPython />
          <h5>Python</h5>
        </SkillCard>
        <SkillCard>
          <DiGit />
          <h5>Git</h5>
        </SkillCard>
        <SkillCard>
          <SiFirebase />
          <h5>Firebase</h5>
        </SkillCard>
        <SkillCard>
          <SiPostgresql />
          <h5>PostgreSQL</h5>
        </SkillCard>

        <SkillCard>
          <SiJavascript />
          <h5>Javascript</h5>
        </SkillCard>
        <SkillCard>
          <SiTypescript />
          <h5>Typescript</h5>
        </SkillCard>
        <SkillCard>
          <SiReact />
          <h5>React</h5>
        </SkillCard>
        <SkillCard>
          <SiNextdotjs />
          <h5>Next.js</h5>
        </SkillCard>
        <SkillCard>
          <SiTailwindcss />
          <h5>Tailwind</h5>
        </SkillCard>
        <SkillCard>
          <SiMongodb />
          <h5>MongoDB</h5>
        </SkillCard>
        <SkillCard>
          <SiCss3 />
          <h5>CSS</h5>
        </SkillCard>

        <SkillCard>
          <DiNodejs />
          <h5>Node.js</h5>
        </SkillCard>
        <SkillCard>
          <DiPython />
          <h5>Python</h5>
        </SkillCard>
        <SkillCard>
          <DiGit />
          <h5>Git</h5>
        </SkillCard>
        <SkillCard>
          <SiFirebase />
          <h5>Firebase</h5>
        </SkillCard>
        <SkillCard>
          <SiPostgresql />
          <h5>PostgreSQL</h5>
        </SkillCard>
      </SkillsSlider>
    </SkillsContainer>
  );
}

export default Toolstack;