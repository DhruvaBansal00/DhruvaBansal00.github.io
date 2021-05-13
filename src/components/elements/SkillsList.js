import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {
  Grid,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#0",
    boxShadow: "0 6px 30px -10px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function SkillItem(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item key={props.index}>
      <Card className={classes.root}>
        <CardHeader
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          
          avatar={
            <figure class="image is-48x48">
              <img class="is-square" src={props.icon}/>
            </figure>
          }
          title={
            <p>{props.name}</p>
          }
        />
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <p>{props.use}</p>
          </CardContent>
        </Collapse> */}
      </Card>
    </Grid>
  );
}

export default SkillItem;