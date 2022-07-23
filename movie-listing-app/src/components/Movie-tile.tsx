import React from "react"
import { FileExtensionInfo } from "typescript"


type Props = {
    title: string,
    poster:string,
    posterurl: string
}

const outerContainer = {

    width: "20%", // tbd
    minWidth: "10em", //tbd
    padding: "1rem" //tbd
}

const innerContainer = {

    marginTop: "20px", // tbd
    textAlign: "center" as const, 
    outline: "1px solid green" //to be removed 
    
}

function MovieTile (props : Props)
{
    const {title, poster, posterurl} = props
    const el = (
    <div style={outerContainer}>
        <img style={{width: "100%"}} src={`/img/${poster}`} alt={posterurl}></img>
        <div style={innerContainer}>{title}</div>
    </div>
    )
    return el;
}

export default MovieTile;