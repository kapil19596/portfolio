import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import Lightbox CSS

import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxIndex(0);
  };

  return (
    <Card className="project-card-view">
      <Carousel>
        {props.imgPaths.map((imgPath, index) => (
          <Carousel.Item key={index} onClick={() => openLightbox(index)}>
            <img src={imgPath} className="d-block w-100" alt={`card-img-${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        {/* {!props.isBlog && props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )} */}
        {/* {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )} */}
      </Card.Body>
      {lightboxOpen && (
        <Lightbox
          mainSrc={props.imgPaths[lightboxIndex]}
          onCloseRequest={closeLightbox}
          enableZoom={false}
          closeButtonTitle="Close (Esc)"
        />
      )}
    </Card>
  );
}

export default ProjectCards;
