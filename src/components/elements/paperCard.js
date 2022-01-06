import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  Grid,
} from "@material-ui/core";
import { green, blue, purple } from "@material-ui/core/colors";
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  card: {
    width: "100%",
    height: "100%",
    marginLeft: "15px",
    marginRight: "15px",
    margin: "auto",
    transition: "0.3s",
    minHeight: "270px",
    borderRadius: ".625rem!important",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  tittle: {
    "&:active": {
      color: "#00008E",
    },
  },
  cardContent: {
    minHeight: "120px",
  },
  cardActions: {
    padding: "16px",
  },
  avatar: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: blue[500],
  },
  dot: {
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    display: "inline-block",
  },
}));

const PaperCard = ({ paper }) => {
  const classes = useStyles();
  return (
    <Grid xs={12} sm={6} lg={3} className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <span
                className="fab fa-researchgate"
                style={{ fontSize: "20px" }}
              ></span>
            </Avatar>
          }
          title={
            <Typography variant="h6">
              
                {paper.name}
                {" "}
            </Typography>
          }
          action={
            <IconButton aria-label="settings" style={{ color: "black" }}>
              <a href={paper.pdf} download = {paper.name} style={{ color: "black" }}>
                <GetAppIcon />
              </a>
            </IconButton>
          }
        />
        <a
        href={paper.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.tittle}
        style={{ textDecoration: "none", color: "black" }}
        >
        <CardMedia
            className={classes.media}
            image={paper.image}
            title={paper.name}
        />
        </a>
        <a
        href={paper.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.tittle}
        style={{ textDecoration: "none", color: "black" }}
        >
        <CardContent className={classes.cardContent}>
          <Typography variant="body1">{paper.description}</Typography>
        </CardContent>
        </a>
      </Card>
    </Grid>
  );
};

export default PaperCard;