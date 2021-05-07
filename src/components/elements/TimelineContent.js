import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Badge from "../elements/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 750,
    backgroundColor: "#0",
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
  }
}));

function TimelineContent(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation={0}>
    <p onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more">{props.summary}</p>
    {props.summary1.length > 0 &&
    <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon />
    </IconButton>}
    <Collapse in={expanded} timeout="auto" unmountOnExit>
        {props.summary1.length > 0 && <p>{props.summary1}</p>}
        {props.summary2.length > 0 && <br></br>}
        {props.summary2.length > 0 && <p>{props.summary2}</p>}
    </Collapse>
    </Card>
  );
}

export default TimelineContent;