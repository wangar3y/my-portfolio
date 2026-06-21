import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Natasha Wangari </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am a Motivated and detail-driven Data Analyst with certified training from ALX Africa, one of the continent's leading technology and leadership development programmes.
            <br />
            Equipped with practical experience in data analysis, visualisation, and reporting gained through an internship with an international development consultancy.
            <br />
            <br />
            Apart from data analysis, here are a few things I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring data-driven insights that drive meaningful outcomes
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Africa's digital economy
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous learning and professional development
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Committed to leveraging data to generate insight that drives meaningful outcomes!"{" "}
          </p>
          <footer className="blockquote-footer">Natasha Wangari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
