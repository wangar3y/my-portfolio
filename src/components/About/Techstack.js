import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import {
  SiMysql,
  SiPostgresql,
  SiMicrosoftpowerpoint,
  SiTableau,
  SiJupyter,
  SiPandas,
  SiScikitlearn,
  SiMicrosoftoffice,
  SiGooglecloud,
  SiGit,
  SiGithub,
} from "react-icons/si";

const TechCategory = ({ title, children }) => (
  <div>
    <h2 className="category-heading">{title}</h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {children}
    </Row>
  </div>
);

const TechIcon = ({ children }) => (
  <Col xs={4} md={2} className="tech-icons">
    {children}
  </Col>
);

function Techstack() {
  return (
    <div>
      <TechCategory title="Data Analysis & Visualisation">
        <TechIcon><SiPandas /></TechIcon>
        <TechIcon><DiPython /></TechIcon>
        <TechIcon><SiJupyter /></TechIcon>
        <TechIcon><SiMicrosoftpowerpoint /></TechIcon>
        <TechIcon><SiTableau /></TechIcon>
      </TechCategory>

      <TechCategory title="Databases & Querying">
        <TechIcon><SiMysql /></TechIcon>
        <TechIcon><SiPostgresql /></TechIcon>
      </TechCategory>

      <TechCategory title="Machine Learning & Statistics">
        <TechIcon><SiScikitlearn /></TechIcon>
        <TechIcon><SiPandas /></TechIcon>
      </TechCategory>

      <TechCategory title="Productivity & Collaboration">
        <TechIcon><SiMicrosoftoffice /></TechIcon>
        <TechIcon><SiGooglecloud /></TechIcon>
        <TechIcon><SiGit /></TechIcon>
        <TechIcon><SiGithub /></TechIcon>
      </TechCategory>
    </div>
  );
}

export default Techstack;
