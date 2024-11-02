import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiTableau } from "react-icons/si";
import { FaEmber } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiMysql,SiCss3  } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
  DiNodejsSmall, 
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-label">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-label">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p className="tech-label">Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaEmber />
        <p className="tech-label">Ember.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="tech-label">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejsSmall />
        <p className="tech-label">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p className="tech-label">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="tech-label">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
        <p className="tech-label">HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <SiCss3 />
  <p className="tech-label">CSS</p>
</Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <p className="tech-label">Tableau</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-label">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <p className="tech-label">Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="tech-label">PostgreSQL</p>
      </Col>
    </Row>

  );
}

export default Techstack;
