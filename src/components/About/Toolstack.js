import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaFigma, FaGithub, FaSlack, FaNpm, FaMicrosoft, FaFileExcel, FaFilePowerpoint } from 'react-icons/fa';
import {
  SiVisualstudiocode, SiPostman, SiVercel, SiDocker, SiAmazonaws, SiJira, SiMongodb, SiHeroku, SiWebpack, SiGraphql,
  SiMicrosoftazure, SiConfluence
} from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
        <p className="tech-label">Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiConfluence />
        <p className="tech-label">Confluence</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <p className="tech-label">Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-label">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-label">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p className="tech-label">Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <p className="tech-label">GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p className="tech-label">AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p className="tech-label">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNpm />
        <p className="tech-label">NPM</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
        <p className="tech-label">Webpack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <p className="tech-label">GraphQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
        <p className="tech-label">Excel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFilePowerpoint />
        <p className="tech-label">PowerPoint</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
