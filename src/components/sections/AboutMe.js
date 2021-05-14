import React from "react";
import Badge from "../elements/Badge";
import Resume from "../../resume.json";
import Particles from 'react-particles-js';
import particlesConfig from '../elements/particlesConfig';

function AboutMe() {
  return (
    <section className="section" id="aboutMe" style={{ backgroundImage: "linear-gradient(to right, #e66465, #9198e5)"}}>
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <div className="container has-text-centered">
        <figure className="image container is-180x180">
          <img
            width="180px"
            height="180px"
            src={Resume.basics.picture}
            alt={Resume.basics.name}
            className="is-rounded"
            onError={(e)=>{e.target.onerror = null; e.target.src=Resume.basics.x_pictureFallback}}
          />
        </figure>
        {/* <p className="subtitle is-4 has-text-white has-text-weight-bold">
          {Resume.basics.x_title}
        </p> */}
        <br></br>
        <div className="columns download has-text-centered is-centered">
        <p>
          <a href={Resume.basics.resume} className="button" download = "Resume">Download Resume &nbsp; <i className="fa fa-download">  </i> </a>
        </p>
        </div>
        <p className="subtitle is-5 has-text-white has-text-weight-light summary-text">
          {Resume.basics.summary}
        </p>
        <div className="container interests">
          <div className="field is-grouped is-grouped-multiline is-grouped-centered has-text-centered">
            {Resume.interests.map((value, index) => {
              return (
                <Badge key={index} text={value.name} faIcon={value.x_icon} />
              );
            })}
          </div>
        </div>        
      </div>
    </section>
  );
}

export default AboutMe;
