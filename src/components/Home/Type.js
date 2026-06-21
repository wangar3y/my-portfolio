import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Analyst",
          "Power BI Dashboard Designer",
          "Python & SQL Enthusiast",
          "Insights-Driven Problem Solver",
          "ALX Africa Certified",
          "Committed to Africa's Digital Economy",
          "Lifelong Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
