import React from "react";
import PaperCard from '../elements/paperCard';
import { Grid } from "@material-ui/core";
import Resume from "../../resume.json";

function Research() {
  return (
    <section className="section" id="research">
      <div className="container">
        <h1 className="title">Research Articles</h1>
        <Grid container spacing={1} justify="center">
          {Resume.researchArticles.map((data, i) => (
            <PaperCard paper={data} key={i}/>
          ))}
        </Grid>
        </div>
    </section>
  );
}

export default Research;
