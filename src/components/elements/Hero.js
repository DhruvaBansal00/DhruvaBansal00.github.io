import React from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

var ReactRotatingText = require('react-rotating-text');
function Hero() {
  return (
    <section className="hero is-dark is-fullheight has-bg-image">
      {/* style={{ position: 'relative', overflow: "hidden", backgroundImage: "linear-gradient(to right, #e66465, #9198e5)" }} */}
      {/* <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div> */}
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container">
          <p className="subtitle is-5 has-text-weight-light">I'm a</p>
          <h1 className="title" style={{ color: "#ffb469" }}>
            <ReactRotatingText typingInterval="60" items={Resume.basics.label} />
          </h1>
          <h2 className="subtitle">
            based in {Resume.basics.location.region}{Resume.basics.location.country} <br></br>
            <i>{Resume.basics.email}</i>
          </h2>
        </div>
      </div>
      <div className="hero-foot" style={{ paddingBottom: "20px", zIndex: "10" }}>
        <div className="columns is-mobile">
          <div className="column"></div>
          {Resume.basics.profiles.map((value, index) => {
            return (
              <div key={index} className="column has-text-centered">
                <a
                  href={value.url}
                  target="blank"
                  className="is-hovered"
                  title={value.network}
                >
                  <span className="icon is-medium is-">
                    <i className={value.x_icon}></i>
                  </span>
                </a>
              </div>
            );
          })}
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
