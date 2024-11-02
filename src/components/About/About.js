import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >                  
            <Card className="quote-card-view">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                  As a full stack developer, I bring a robust skill set encompassing both
                  <span className="purple"> backend </span> and <span className="purple"> frontend</span> technologies. 
                  Proficient in <span className="purple">Java</span> and <span className="purple">Python</span> for backend development
                  On the frontend, I excel in HTML, CSS, <span className="purple">JavaScript</span>, 
                  and frameworks like <span className="purple">React</span>, <span className="purple">Angular</span>, <span className="purple">EmberJs</span>, and 
                  <span className="purple"> WordPress</span>, ensuring intuitive user interfaces.
                  I leverage <span className="purple">MS SQL</span>,  <span className="purple">PostgreSQL</span>, and  <span className="purple">Redis</span> for efficient database management.
                  With expertise in analytical tools like  <span className="purple">MS Excel</span> and  <span className="purple">Tableau</span>, 
                  coupled with adeptness in version control with <span className="purple">Git</span> and project management tools 
                  such as <span className="purple">Jira</span> and <span className="purple">Confluence</span>, I deliver comprehensive solutions aligned with business objectives.
                  <br />
                </p>
              </blockquote>
            </Card.Body>
          </Card>

          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
