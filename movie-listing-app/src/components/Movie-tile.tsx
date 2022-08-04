import React, {useState, useEffect} from "react"
import { FileExtensionInfo } from "typescript"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faHeartbeat, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import "../MovieTile.css"
import {
    getMoviesinTheatres,
    getTopRatedMovies,
    getTopRatedIndia,
    getMoviescoming,
    getFavorite,
    addToFavorite
} from '../service/read-data';
import movieObject from "../model/movie"
import { MovieDetails } from "./Movie-details-display"; 

type Props = {
    movieName: movieObject
    func: Function
}

const findDataAndAdd = async function (movie: movieObject) 
{
    let data = await(getFavorite())

    let res = data.find((item: movieObject) => item.id === movie.id)

    // console.log(res)

    if(res!== undefined)
    {
        alert("Already added to favourite")
    }

    else{
        addToFavorite(movie)
    }
}

function MovieTile (props : Props)
{
    

    let [style, setStyle] = useState("innerContainer-white");


    const postFavourite = (movie: movieObject) => () => 
    {
        
        findDataAndAdd(movie)
    }
    
    const movie = props.movieName
    const changeState = props.func
    const el = 
    (
     <> 
    {
    (
    <div className="outerContainer">
        <img style={{width: "100%", height: "30vw", objectFit: "cover"}} src={`/img/${movie.poster}`} alt={movie.posterurl}
        onClick={() => changeState(movie)}></img>
        <div className="innerContainer1">{movie.title}</div>
        <button className={style} onClick={postFavourite(movie)}>
            <>
            <span>Add to Favourite  </span>
            <FontAwesomeIcon icon={faHeart} color="red"/>
            </>
        </button>
    </div>
    )}

    
    </>  
    )
    return el;
}

export default MovieTile;