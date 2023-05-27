import React, { useState, useRef, useEffect } from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Player from "./Player";
import Notifications from "./Notifications";
import Options from "./Options";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "90px 0px 0px 0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "1px solid black",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

function VideoCallComponents() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar
        className={classes.appBar}
        position="static"
        style={{ zIndex: "-1" }}
        color="inherit"
      >
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
      <Player />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default VideoCallComponents;
