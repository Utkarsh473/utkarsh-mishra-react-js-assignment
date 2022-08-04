import React, {useState} from "react"
import { FileExtensionInfo } from "typescript"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faHeartbeat, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faDeleteLeft, faL } from "@fortawesome/free-solid-svg-icons"
import "../MovieTile.css"
import {
    getMoviesinTheatres,
    getTopRatedMovies,
    getTopRatedIndia,
    getMoviescoming,
    getFavorite,
    addToFavorite,
    deleteFromFavourite
} from '../service/read-data';
import movieObject from "../model/movie"
import { render } from "@testing-library/react"
import MovieListDisplay from "./Movie-list-display"


type Props = {
    movieName: movieObject
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

const removeFromFavourite = async (movie: movieObject) =>
{
        
        await deleteFromFavourite(movie.id)
}

function MovieTileFavourite (props : Props)
{
    let [movieDetailShow, setMovieDetailShow] = useState(false);

    let [style, setStyle] = useState("innerContainer-white");

    
    
    const movie = props.movieName
    const el = 
    (
     <> 
    {
    !movieDetailShow && (
    <div className="outerContainer">
        <img style={{width: "100%", height: "30vw", objectFit: "cover"}} src={`/img/${movie.poster}`} alt={movie.posterurl}
        ></img>
        <div className="innerContainer1">{movie.title}</div>
        <button className={style} onClick={() => removeFromFavourite(movie)}>
            <>
            <span>Remove From Favourite  </span>
            <FontAwesomeIcon icon={faDeleteLeft} size="lg"/>
            </>
        </button>
    </div>
    )}
    </>  
    )
    return el;
}

export default MovieTileFavourite;