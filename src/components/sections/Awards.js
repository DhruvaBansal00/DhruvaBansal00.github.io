import React from "react";
import Resume from "../../resume.json"
import AwardCard from "../elements/AwardCard"
import {Carousel} from '3d-react-carousal';
import { Grid } from "@material-ui/core";

// const slides = [
//     Resume.Awards.map((item, j) => {
//         return (
//         <AwardCard award={item} />
//         );
//     })
// ];

function Awards () {        
    return (
        <section className="section" id="awards">
        <div class="container">
        <h1 className="title">Awards</h1>
        <Grid container spacing={1} justify="center">
          {Resume.Awards.map((data, i) => (
            <AwardCard award={data} key={i}/>
          ))}
        </Grid>
        </div>
        </section>
    )
}
export default Awards;