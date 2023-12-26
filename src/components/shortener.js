import { Button, TextField, Grid } from "@mui/material";
import React from "react";
import { useState, useEffect, useRef } from "react";
import ShortUrlItem from "./shortUrlItem";

export default function Shortener() {
  const [Url, setURL] = useState([]);
  const inputRef = useRef(null);
  
  function submitHandler() {
    const input = inputRef.current.value;
    const regex = new RegExp(
        // eslint-disable-next-line
      `(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})`
    );
    if (regex.test(input)) {
      callAPI(input);
      inputRef.current.value=''
    } else {
      console.log("No match");
    }
  }

  function callAPI(input) {
    const obj1 = {
      oldUrl: input,
      shortUrl: "",
    };
    fetch(`https://v.gd/create.php?format=json&url=${input}`)
      .then((response) => response.json())
      .then((data) => {
        obj1.shortUrl = data.shorturl;
        setURL([...Url, obj1]);
      });
  }

  useEffect(()=>{
    if(Url.length>0) sessionStorage.setItem('url', JSON.stringify(Url))
  },[Url])

  useEffect(()=>{
    let sessionUrl=sessionStorage.getItem('url')
    if(sessionUrl!==null){
      setURL(JSON.parse(sessionUrl))
    }
  },[])
  return (
    <>
      <div className="shortener-container">
        <Grid container spacing={2} alignItems={'center'} className="input-container">
                <Grid item xs={12} sm={12} md={12} lg={11} xl={11}>
                    <TextField
                        fullWidth
                        variant="filled"
                        inputRef={inputRef}
                        id="url"
                        name="url"
                        placeholder="Shorten a link here..."
                        sx={{backgroundColor:"white", mr:2}}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
                    <Button
                        variant="contained"
                        disableElevation
                        sx={{
                        backgroundColor: "hsl(180, 66%, 49%)",
                        borderRadius: "5px",
                        display: "block",
                        maxWidth: 200,
                        }}
                        className="Button"
                        onClick={submitHandler}
                    >
                        Shorten It!
                    </Button>
                </Grid>
        </Grid>
        {Url.length > 0 &&
          Url.map((urlObject, index) => (
            <ShortUrlItem key={index} urlObject={urlObject} />
          ))}
      </div>
    </>
  );
}
