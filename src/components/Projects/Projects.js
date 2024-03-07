import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import comments from "../../Assets/Projects/Comments.png";
import zara from "../../Assets/Projects/Zara.png";
import suicide from "../../Assets/Projects/suicide.png";
import madisonbcycle from "../../Assets/Projects/madisonbcycle.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Zara Website Redesign"
              description="Spearheaded a UI/UX redesign of the ZARA website, focusing on user-centric wireframes and interactive features, all expertly implemented using WordPress, resulting in enhanced user engagement and experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Bcycle Information System Enhancement"
              description="I enhanced the Madison Bcycle Information System by analyzing user needs and system functionalities, then crafted a detailed Project Charter outlining scope, budget, and schedule, incorporating risk mitigation strategies. I efficiently managed project tasks using a Work Breakdown Structure (WBS) and Gantt chart, streamlining the enhancement process."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Comments Microservice"
              description="As the lead developer on a full-stack project, I designed and implemented  a React.js-powered Comments micro-service with a Java backend, which significantly increased user engagement by 40%. This integration effectively enhanced UI responsiveness and backend efficiency, showcasing my skills in both front-end and back-end development."            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sourcing Events"
              description="As a software developer, I spearheaded the creation of 10+ screens in the Sourcing Event Module, significantly reducing event setup time by 50% and boosting supplier engagement by 40% through streamlined processes. This involved enhancing both front-end usability and backend efficiency, resulting in a more seamless user experience and improved system performance."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Admin Planner Configuration"
              description="I led the development of a Planner configurations service, utilizing Java and Ember.js, to optimize the configuration process for admin users. This initiative drove a remarkable 40% enhancement in customization capabilities within supply chain software systems. By leveraging both backend Java expertise and frontend Ember.js proficiency, I successfully delivered a comprehensive solution that streamlined operations and maximized system flexibility."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={true}
              title="Ember Light Table"
              description="I implemented the Ember Light Table framework to optimize rendering of product category mapping data, achieving a significant 50% reduction in screen load time. This enhancement effectively elevated the overall user experience, demonstrating my proficiency in leveraging advanced frontend technologies to improve system performance and usability."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
