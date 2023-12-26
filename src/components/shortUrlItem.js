import { Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function ShortUrlItem(props){
    return(
        <Grid container className="shortUrl-container">
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Typography>
                <span>{props.urlObject.oldUrl}</span>
            </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3} justifySelf={'flex-end'}>
            <Typography sx={{color:'hsl(180, 66%, 49%)', fontSize:'1em'}}>
                <span>{props.urlObject.shortUrl}</span>
            </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
            <Button  variant="contained"
            disableElevation
            sx={{
              backgroundColor: "hsl(180, 66%, 49%)",
              borderRadius: "5px",
              ml: 2,
              px:3,
              display: "block",
            }}>Copy</Button>
            </Grid>
            
        </Grid>
    )
}