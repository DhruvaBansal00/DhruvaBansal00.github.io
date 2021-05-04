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
    <Grid item xs={6} md={props.size} key={props.index}>
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
            <p style={{wordBreak: "break-word"}}>{props.name}</p>
          }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{props.use}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default SkillItem;