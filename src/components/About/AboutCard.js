import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Kapil Kumar Yadav </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I am currently pursuing a Master of Science degree from the <strong className="purple">University of Wisconsin-Madison</strong>.
            <br />
            I have completed my Bacheloers in Information technology from <strong className="purple">Delhi technological University.</strong>
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
