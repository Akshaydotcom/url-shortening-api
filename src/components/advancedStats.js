import React from "react";

import { Grid, Paper } from "@mui/material";

export default function AdvancedStats(props) {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} alignSelf={"flex-start"}>
      <Paper
        className="paper-item"
        sx={{ height: 300, width: "90%", padding: 2 }}
      >
        <div className="img-container">
          <img src={props.icon} alt="Icon for Brand Recognition" />
        </div>
        <div>
          <h4>{props.title}</h4>
          <p>
            {props.children}
          </p>
        </div>
      </Paper>
    </Grid>
  );
}
