import { Button, Grid, Snackbar, Typography } from "@mui/material";
import React from "react";

export default function ShortUrlItem(props){
    const [openSnackBar, setOpenSnackBar]=React.useState(false);
    const [copied, setCopied]=React.useState(false);

    function copyURLToClipBoard(){
        navigator.clipboard.writeText(props.urlObject.shortUrl)
        setOpenSnackBar(true)
        setCopied(true)
    }

    function handleClose(){
        setOpenSnackBar(false)
    }


    return(
        <>
        <Grid container className="shortUrl-container">
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Typography>
                <span>{props.urlObject.oldUrl}</span>
            </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3} justifySelf={'flex-end'}>
            <Typography sx={{color:'hsl(180, 66%, 49%)', fontSize:'1em'}}>
                <span><a href={props.urlObject.shortUrl} target="_new">{props.urlObject.shortUrl}</a></span>
            </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
            {copied? <Button  variant="contained"
            disableElevation
            onClick={copyURLToClipBoard}
            sx={{
              backgroundColor: "hsl(257, 27%, 26%)",
              borderRadius: "5px",
              ml: 2,
              px:3,
              display: "block",
              fontFamily:'Poppins',
              fontWeight:'bold',
            }}>Copied!</Button>:
            <Button  variant="contained"
            disableElevation
            onClick={copyURLToClipBoard}
            sx={{
              backgroundColor: "hsl(180, 66%, 49%)",
              borderRadius: "5px",
              ml: 2,
              px:3,
              display: "block",
              fontFamily:'Poppins',
              fontWeight:'bold'
            }}>Copy</Button>}
            </Grid>
            
        </Grid>
        <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleClose} sx={{backgroundColor:'white', p:2, border:'1px solid black'}}>
            <Typography>Link Copied!!</Typography>
        </Snackbar>
        </>
    )
}