import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Backdrop  from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import '../styles/shortener.css'
export const Shortener=()=>{
    const textRef=useRef(null)
    const [inProgress, setInProgress]=useState(false)
    let [arrayOfOriginalLinks,setArrayOfOriginalLinks]=React.useState([])
    let [arrayOfShortLinks, setArrayOfShortLinks]=React.useState([])
    let x1=sessionStorage.getItem('originalLink')
    let x2=sessionStorage.getItem('shortLink')
    useEffect(()=>{
        if(x1 && x1.split(',').length>1)
        { x1.split(',').forEach(element=> setArrayOfOriginalLinks(arrayOfOriginalLinks=>[...arrayOfOriginalLinks,element]))
           }
        if(x2 && x2.split(',').length>1)
        {
            x2.split(',').forEach(element => {
                setArrayOfShortLinks(arrayOfShortLinks=>[...arrayOfShortLinks,element])
            });
            
        }
    },[])
    const handleClick=()=>{
        setInProgress(true)
        axios.get('https://api.shrtco.de/v2/shorten?url='+textRef.current.value)
        .then(res=>{
            if(res.data.ok===true){
            setArrayOfOriginalLinks(arrayOfOriginalLinks=>[...arrayOfOriginalLinks,res.data.result.original_link])
            setArrayOfShortLinks(arrayOfShortLinks=>[...arrayOfShortLinks,res.data.result.full_short_link])
            setInProgress(false)
            textRef.current.value=''
            }
        })
    }
    useEffect(()=>{
        sessionStorage.setItem('originalLink',arrayOfOriginalLinks.toString())
    },[arrayOfOriginalLinks])

    useEffect(()=>{
        sessionStorage.setItem('shortLink',arrayOfShortLinks.toString())
    },[arrayOfShortLinks])
   
    return(
        <div className="container">
            <Backdrop open={inProgress} style={{zIndex:'100'}}><CircularProgress /></Backdrop>
            <div ><input className="inputText" placeholder="Shorten a link here.." ref={textRef}/><Button variant="contained" color="primary" onClick={handleClick}>Shorten it!</Button></div>
            {(arrayOfOriginalLinks.length!==0) && <div className="originalLink">
                    {arrayOfOriginalLinks.map((link1)=>(<><p >{link1}</p></>))}
                </div>}
            {(arrayOfShortLinks.length!==0) && <div className="shortenedLink">
                    {arrayOfShortLinks.map((link2)=>
                    <><p >{link2}<Button variant="outlined" color="primary" onClick={()=>navigator.clipboard.writeText(link2)}>Copy to Clipboard</Button></p></>)}
                </div>}
        </div>
    )
}