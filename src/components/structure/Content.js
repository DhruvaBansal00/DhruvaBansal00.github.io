import React from "react";
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Articles from "../sections/Articles";
import GitHub from "../sections/GitHub";

function Content() {
  return (
    <main>
      <AboutMe />
      <Experience />
      <Skills />
      {/* <GitHub /> */}
      {// <Articles />
  	}
    </main>
  );
}

export default Content;
