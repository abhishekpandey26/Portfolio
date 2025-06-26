import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Know Who I Am
            <br />
            Hi Everyone, I am <span className="purple">Abhishek Kumar Pandey</span> from <span className="purple">India</span>.
            <br />
            I am currently pursuing my Bachelor's degree in Engineering at PES College of Engineering with a specialization in Computer Science.
            <br />
            I have a keen interest in full-stack web development and have worked extensively with the MERN stack.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building side projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and meeting new people
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose. Build with passion. Make an impact!"
          </p>
          <footer className="blockquote-footer">Abhishek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
