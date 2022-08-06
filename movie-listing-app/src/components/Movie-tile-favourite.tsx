import React, {useState} from "react"
import { FileExtensionInfo, isPropertyAccessExpression } from "typescript"
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
import { count } from "console"


type Props = {
    movieName: movieObject
    func: Function
    setFavoriteModified: Function
    count: number
}

const removeFromFavourite = async (movie: movieObject, props: Props) =>
{
    try{    
        await deleteFromFavourite(movie.id)
        props.setFavoriteModified(props.count+1)

    }catch(error)
    {
        console.log(error)
    }
}

function MovieTileFavourite (props : Props)
{
    let [movieDetailShow, setMovieDetailShow] = useState(false);

    let [style, setStyle] = useState("innerContainer-white");

    
    
    const movie = props.movieName
    const changeState = props.func

    const el = 
    (
     <> 
    {
    !movieDetailShow && (
    <div className="outerContainer">
        <img style={{width: "100%", height: "30vw", objectFit: "cover"}} src={`/img/${movie.poster}`} alt={movie.posterurl}
        onClick={() => changeState(movie)}></img>
        <div className="innerContainer1">{movie.title}</div>
        <button className={style} onClick={() => removeFromFavourite(movie, props)}>
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