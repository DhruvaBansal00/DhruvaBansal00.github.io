import React from "react";
import GitHubCalendar from 'react-github-calendar';

function Skills() {
  return (
    <section className="section" id="github">
      <div className="container">
        <h1 className="title">GitHub</h1>
        <GitHubCalendar username="DhruvaBansal00" blockSize={20}/>
        </div>
    </section>
  );
}

export default Skills;
