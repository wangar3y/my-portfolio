import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import powerbi from "../../Assets/Projects/powerbi-dashboard.png";
import datasql from "../../Assets/Projects/data-sql.png";
import python from "../../Assets/Projects/python-analysis.png";

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
              imgPath={powerbi}
              title="Kenya Field Operations Dashboard"
              description="Developed a centralized Power BI dashboard consolidating manual timesheet and budget spend records from field teams across 8 Kenyan counties. Automated data consolidation to provide management with real-time visibility of staff hours and expenditure, replacing manual spreadsheet compilation."
              githubLink="https://github.com/wangar3y"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datasql}
              title="Data Cleaning & EDA with SQL"
              description="Performed comprehensive data cleaning, validation, and exploratory data analysis using SQL on operational datasets. Identified data gaps and inconsistencies in legacy reporting processes, ensuring data accuracy and usability for evidence-based decision-making."
              githubLink="https://github.com/wangar3y"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              title="Python Data Analysis Portfolio"
              description="Built interactive data visualizations and analytical reports using Python (pandas, matplotlib) as part of ALX Africa project-based assessments. Completed multiple end-to-end projects involving real-world data, practising data-driven problem solving and evidence-based decision-making."
              githubLink="https://github.com/wangar3y"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
