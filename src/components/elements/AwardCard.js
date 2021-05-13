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

const AwardCard = ({ award }) => {
  const classes = useStyles();
  return (
    <Grid xs={12} sm={6} lg={3} className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <span
                className="fas fa-award"
                style={{ fontSize: "20px" }}
              ></span>
            </Avatar>
          }
          title={
            <Typography variant="h6">
              
                {award.name}
                {" "}
            </Typography>
          }
        />
        <a
        href={award.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.tittle}
        style={{ textDecoration: "none", color: "black" }}
        >
        <CardMedia
            className={classes.media}
            image={award.image}
            title={award.name}
        />
        </a>
        <a
        href={award.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.tittle}
        style={{ textDecoration: "none", color: "black" }}
        >
        <CardContent className={classes.cardContent}>
          <Typography variant="body1">{award.description}</Typography>
        </CardContent>
        </a>
      </Card>
    </Grid>
  );
};

export default AwardCard;