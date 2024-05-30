import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import users from "../../Assets/Projects/users1.png";
import emotion from "../../Assets/Projects/plannerconfig1.png";
import comments from "../../Assets/Projects/Comments.png";
import comments1 from "../../Assets/Projects/Comments_2.png";
import comments2 from "../../Assets/Projects/Comments_3.png";
import adminDashboard1 from "../../Assets/Projects/adminPanel1.png";
import adminDashboard2 from "../../Assets/Projects/adminPanel2.png";
import adminDashboard3 from "../../Assets/Projects/adminPanel3.png";
import zara from "../../Assets/Projects/Zara1.png";
import zara1 from "../../Assets/Projects/Zara2.png";
import zara2 from "../../Assets/Projects/Zara3.png";
import Sourcing_Events1 from "../../Assets/Projects/Sourcing_Events1.png";
import Sourcing_Events2 from "../../Assets/Projects/Sourcing_Events2.png";
import Sourcing_Events3 from "../../Assets/Projects/Sourcing_Events3.png";
import madisonbcycle from "../../Assets/Projects/bcycle.png";
import madisonbcycle1 from "../../Assets/Projects/bcycle1.png";
import madisonbcycle2 from "../../Assets/Projects/bcycle2.png";
import madisonbcycle3 from "../../Assets/Projects/bcycle3.png";
import cp1 from "../../Assets/Projects/Category_Planning_1.png";
import cp2 from "../../Assets/Projects/Category_Planning_2.png";
import cp3 from "../../Assets/Projects/Category_Planning_3.png";
import pc1 from "../../Assets/Projects/sku2.png";
import pc2 from "../../Assets/Projects/sku3.png";
import pc3 from "../../Assets/Projects/users1.png";

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
              imgPath={zara}
              imgPaths={[adminDashboard1, adminDashboard2, adminDashboard3]}
              isBlog={false}
              title="Admin Panel Dashboard"
              description="I built a React Admin Dashboard from scratch, covering essential components like sidebars, navbars, widgets, progress bars, and charts. The project also included integrating MUI tables, creating form pages, and implementing dark mode using Context API. Additionally, I utilized React Router Dom for navigation and ensured the application was responsive and user-friendly"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zara}
              imgPaths={[zara2, zara1, zara]}
              isBlog={false}
              title="Zara Website Redesign"
              description="Spearheaded a UI/UX redesign of the ZARA website, focusing on user-centric wireframes and interactive features, all expertly implemented using WordPress, resulting in enhanced user engagement and experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={zara}
              imgPaths={[madisonbcycle,madisonbcycle1,madisonbcycle2,madisonbcycle3]}
              isBlog={false}
              title="Bcycle Information System Enhancement"
              description="I enhanced the Madison Bcycle Information System by analyzing user needs and system functionalities, then crafted a detailed Project Charter outlining scope, budget, and schedule, incorporating risk mitigation strategies. I efficiently managed project tasks using a Work Breakdown Structure (WBS) and Gantt chart, streamlining the enhancement process."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={zara}
              imgPaths={[comments, comments1, comments2]}
              isBlog={false}
              title="Comments Microservice"
              description="As the lead developer on a full-stack project, I designed and implemented  a React.js-powered Comments micro-service with a Java backend, which significantly increased user engagement by 40%. This integration effectively enhanced UI responsiveness and backend efficiency, showcasing my skills in both front-end and back-end development."            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={zara}
              imgPaths={[cp2, cp3, cp1]}
              isBlog={false}
              title="Category Planning"
              description="I developed the Category Planning Module using React for the frontend, Java for backend services, and SQL queries for data handling. This module enabled real-time planning and timely actions across diverse categories, reducing the planning cycle time by 50% and increasing revenue by $2 million annually. Dynamic charts were integrated for enhanced data visualization and decision-making."
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={zara}
              imgPaths={[Sourcing_Events1, Sourcing_Events2, Sourcing_Events3]}
              isBlog={false}
              title="Sourcing Events"
              description="As a software developer, I spearheaded the creation of 10+ screens in the Sourcing Event Module, significantly reducing event setup time by 50% and boosting supplier engagement by 40% through streamlined processes. This involved enhancing both front-end usability and backend efficiency, resulting in a more seamless user experience and improved system performance."
              ghLink="https://github.com//Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={zara}
              imgPaths={[pc1, pc2, pc3]}
              isBlog={false}
              title="Admin Planner Configuration"
              description="I led the development of a Planner configurations service, utilizing Java and Ember.js, to optimize the configuration process for admin users. This initiative drove a remarkable 40% enhancement in customization capabilities within supply chain software systems. By leveraging both backend Java expertise and frontend Ember.js proficiency, I successfully delivered a comprehensive solution that streamlined operations and maximized system flexibility."
              ghLink="https://github.com//AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={zara}
              imgPaths={[emotion]}
              isBlog={true}
              title="Ember Light Table"
              description="I implemented the Ember Light Table framework to optimize rendering of product category mapping data, achieving a significant 50% reduction in screen load time. This enhancement effectively elevated the overall user experience, demonstrating my proficiency in leveraging advanced frontend technologies to improve system performance and usability."
              ghLink="https://github.com//Face_And_Emotion_Detection"
              // demoLink="https://blogs.jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
