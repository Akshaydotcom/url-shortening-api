import { Button, Typography } from "@mui/material";
import React from "react";

export default function ShortUrlItem(props){
    return(
        <div style={{display:'inline-flex', alignContent:'flex-start'}}>
            <Typography>
                <span>{props.urlObject.oldUrl}</span>
                <span>{props.urlObject.shortUrl}</span>
            </Typography>
            <Button  variant="contained"
            disableElevation
            sx={{
              backgroundColor: "hsl(180, 66%, 49%)",
              borderRadius: "5px",
              ml: 2,
              px:3,
              display: "block",
            }}>Copy</Button>
        </div>
    )
}