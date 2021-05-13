import React from "react";
import Resume from "../../resume.json";
import SkillItem from '../elements/SkillsList';
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
} from '@material-ui/core/'
import Timeline from "../elements/HTimeline"

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(2)
  }
}))

function Skills() {
  const classes = useStyles()
  return (
    <section className="section" id="skills">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className={classes.root}>
            <Grid
                container
                spacing={3}
                // direction="row"
                justify="center"
                // alignItems="flex-start"
                //={12} sm={6} md={3}
                // flexwrap="wrap"
            >
                {Resume.skills.map(elem => (
                  <SkillItem index={Resume.skills.indexOf(elem)} name={elem.name} icon={elem.icon} use={elem.use} size={elem.size}/>
                ))}
            </Grid>
        </div>
      </div>
    </section>
  );
}

export default Skills;
