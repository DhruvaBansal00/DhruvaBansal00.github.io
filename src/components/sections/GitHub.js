import React from "react";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
function GitHub() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h1 className="title">GitHub Contributions:</h1>
        <GitHubCalendar username="DhruvaBansal00" blockSize={20} fontSize={20}>
          <ReactTooltip delayShow={50} html textColor="black" backgroundColor="white"/>
        </GitHubCalendar>
        </div>
    </section>
  );
}

export default GitHub;
