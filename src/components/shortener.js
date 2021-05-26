import React, {useEffect, useRef} from 'react'
import axios from 'axios'
export const Shortener=()=>{
    const textRef=useRef(null)
    let [arrayOfOriginalLinks,setArrayOfOriginalLinks]=React.useState([])
    let [arrayOfShortLinks, setArrayOfShortLinks]=React.useState([])
    let x1=sessionStorage.getItem('originalLink')
    let x2=sessionStorage.getItem('shortLink')
    useEffect(()=>{
        if(x1 && x1.split(',').length>1)
        { setArrayOfOriginalLinks(arrayOfOriginalLinks=>[...arrayOfOriginalLinks,x1.split(",")])}
        if(x2 && x2.split(',').length>1)
        { setArrayOfShortLinks(arrayOfShortLinks=>[...arrayOfShortLinks,x2.split(',')])}
    },[])
    
    const handleClick=()=>{
        axios.get('https://api.shrtco.de/v2/shorten?url='+textRef.current.value)
        .then(res=>{
            if(res.data.ok===true){
            setArrayOfOriginalLinks(arrayOfOriginalLinks=>[...arrayOfOriginalLinks,res.data.result.original_link])
            setArrayOfShortLinks(arrayOfShortLinks=>[...arrayOfShortLinks,res.data.result.full_short_link])
            }
        })
    }
    useEffect(()=>{
        sessionStorage.setItem('originalLink',arrayOfOriginalLinks.toString())
    },[arrayOfOriginalLinks])

    useEffect(()=>{
        sessionStorage.setItem('shortLink',arrayOfShortLinks.toString())
    },[arrayOfShortLinks])
   console.log(x1,x2)
    return(
        <div>
            <input type="text" placeholder="Shorten a link here.." ref={textRef}/><button onClick={handleClick}>Shorten it!</button>
            {(arrayOfOriginalLinks.length!==0) && <div>
                    {arrayOfOriginalLinks.map((link1)=>(<p >{link1}</p>))}
                </div>}
            {(arrayOfShortLinks.length!==0) && <div>
                    {arrayOfShortLinks.map((link2)=>
                    <p>{link2}<button onClick={()=>navigator.clipboard.writeText(link2)}>Copy to Clipboard</button></p>)}
                </div>}
        </div>
    )
}