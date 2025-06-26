import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dukan from "../../Assets/Projects/dukan.png";
import Oil from "../../Assets/Projects/oil.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects by <strong className="purple">Abhishek Kumar Pandey</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Oil}
              isBlog={false}
              title="Oil Walla"
              description="🛢️ An oil delivery web app where users can browse oil products and place orders online. Built using the MERN stack with features like user authentication and a responsive UI."
              ghLink="https://github.com/abhishekpandey26/oil-walla"
              demoLink="https://oil-walla-frontend.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dukan}
              isBlog={false}
              title="Dukan.com"
              description="🛒 A simple e-commerce frontend project where users can browse and add products to their cart. Built with React and styled using Tailwind CSS."
              ghLink="https://github.com/abhishekpandey26/dukan.com"
              demoLink="https://dukan-com.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
