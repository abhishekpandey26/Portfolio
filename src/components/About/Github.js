import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="abhishekpandey26"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <h2>Abhishek Kumar Pandey</h2>
        <p>Full Stack Developer | MERN | Open Source Enthusiast</p>
        <p>B.E. Computer Science, PES College of Engineering</p>
        <p>Passionate about building impactful web applications and exploring new technologies.</p>
      </div>
    </Row>
  );
}

export default Github;
