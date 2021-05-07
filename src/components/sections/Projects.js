import React from "react";
import RepoCard from '../elements/repoCard';
import { Grid } from "@material-ui/core";
import Language from "../../language.json";
import Resume from "../../resume.json";
function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h1 className="title">Projects</h1>
        <Grid container spacing={1} justify="center">
          {Resume.projects.map((data, i) => (
            <RepoCard repo={data} key={i} language={Language} />
          ))}
        </Grid>
        </div>
    </section>
  );
}

export default Projects;
