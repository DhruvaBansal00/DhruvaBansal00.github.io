import React from "react";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
function GitHub() {
  return (
    <section className="section github" id="github">
      <div className="container is-centered">
        <h1 className="title">GitHub Contributions:</h1>
        <GitHubCalendar username="DhruvaBansal00" blockSize={24} fontSize={20}>
          <ReactTooltip delayShow={50} html textColor="black" backgroundColor="white"/>
        </GitHubCalendar>
        </div>
    </section>
  );
}

export default GitHub;
