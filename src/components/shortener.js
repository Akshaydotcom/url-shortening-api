import React from 'react'
import axios from 'axios'
export const Shortener=()=>{
    let [arrayOfOriginalLinks,setArrayOfOriginalLinks]=React.useState([])
    let [arrayOfShortLinks, setArrayOfShortLinks]=React.useState([])
    const handleClick=()=>{
        axios.get('https://api.shrtco.de/v2/shorten?url=https://www.digitalocean.com/community/tutorials/react-axios-react')
        .then(res=>{
            if(res.data.ok===true){
            setArrayOfOriginalLinks(arrayOfOriginalLinks=>[...arrayOfOriginalLinks,res.data.result.original_link])
            setArrayOfShortLinks(arrayOfShortLinks=>[...arrayOfShortLinks,res.data.result.full_short_link])
            }
        })
    }

    return(
        <div>
            <input type="text" /><button onClick={handleClick}>Shorten it!</button>
            {(arrayOfOriginalLinks.length!==0 && arrayOfShortLinks.length!==0) && <div>
                    {arrayOfOriginalLinks.map((link1)=><p>{link1}</p>)}
                </div>}
            {(arrayOfOriginalLinks.length!==0 && arrayOfShortLinks.length!==0) && <div>
                    {arrayOfShortLinks.map((link1)=><p>{link1}</p>)}
                </div>}
        </div>
    )
}