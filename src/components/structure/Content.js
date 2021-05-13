import React from "react";
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Articles from "../sections/Articles";
import Projects from "../sections/Projects";
import GitHub from "../sections/GitHub";
import Research from "../sections/Research";
import Contact from "../sections/Contact";

function Content() {
  return (
    <main>
      <AboutMe />
      <Experience />
      <Projects />
      <GitHub />
      <Research />
      <Skills />
      {/* <Contact /> */}
      {// <Articles />
  	}
    </main>
  );
}

export default Content;
