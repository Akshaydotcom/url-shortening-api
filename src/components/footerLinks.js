import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function FooterLinks(props){
    return (
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Typography sx={{color:'white'}}> {props.title}</Typography>
          <ul className="footer-list">
            { props.links && props.links.map((link, index)=>{
                    return <li key={index}>{link}</li>
                })
            }
          </ul>
          </Grid>
    )
}