import React, { useEffect, useState } from "react";
import axios from "axios";
import movie from "../model/movie"
import MovieTile from "./Movie-tile";
import "../index.css"
import movieObject from "../model/movie";
import { MovieDetails } from "./Movie-details-display"; 

import {
    getMoviesinTheatres,
    getTopRatedMovies,
    getTopRatedIndia,
    getMoviescoming,
    getFavorite,
    addToFavorite
} from '../service/read-data';
import MovieTileFavourite from "./Movie-tile-favourite";

type Props = {
    list : string,
    filterKeyProp: string
    changeDisplay: Function
}

function MovieListDisplay(props : Props){
    const {list, filterKeyProp, changeDisplay} = props

    /*
    console.log("list: "+list)
    console.log("key: "+filterKeyProp)
    */

    let  [data, setData] = useState([]);

    let [favoriteModified, setFavoriteModified] = useState(0)


    useEffect(() => {
            fetchData();
        },[favoriteModified, filterKeyProp, list])

    const fetchData = async () => {

        let movies = []    
        
        try
            {
                switch (list)
                {
                    case "movies-coming": {
                        console.log("movies-coming")
                        movies = await getMoviescoming()
                        movies = movies.filter(
                            (item: any) => item.title.toUpperCase().includes(filterKeyProp.toUpperCase())
                        )
                        console.log(movies)
                        /*data.map(
                            (movie : any, idx : any) => (console.log(movie))
                            )*/
                        /* data = data.filter(
                            (item: movieObject) => {
                                return item.title.toUpperCase().includes("e")
                            }
                        ) */
                        break;
            
                    }
            
                    case "movies-in-theaters": {
                        console.log("movies-in-theaters")
                        movies = await getMoviesinTheatres();
                        movies = movies.filter(
                            (item: any) => item.title.toUpperCase().includes(filterKeyProp.toUpperCase())
                        )
                        console.log(movies)
                        break;

                    }
            
                    case "top-rated-india" :{
                        console.log("top-rated-india")
                        movies = await getTopRatedIndia();
                        movies = movies.filter(
                            (item: any) => item.title.toUpperCase().includes(filterKeyProp.toUpperCase())
                        )
                        console.log(movies)
                        break;
                    }
            
                    case "top-rated-movies" :{
                        console.log("top-rated-movies")
                        movies = await getTopRatedMovies();
                        movies = movies.filter(
                            (item: any) => item.title.toUpperCase().includes(filterKeyProp.toUpperCase())
                        )
                        console.log(movies)
                        break;
                    }
            
                    case "favourit" :{
                        console.log("favourit")
                        movies = await getFavorite();
                        movies = movies.filter(
                            (item: any) => item.title.toUpperCase().includes(filterKeyProp.toUpperCase())
                        )
                        console.log(movies)
                        break;
                    }
                }
                setData(movies);
            }   

            catch(error: any)
            {
                console.log(error.message);
            }
    }

    
    
    // console.log(data)

    const el = (
        <>

            {
            list!=="favourit" && <div className="parent">
                <>
                {
                data.length!=0 && data.map(
                    (movie : movieObject, idx : any) => (
                        <>
                        <MovieTile key={idx} movieName={movie} func={changeDisplay}></MovieTile> 
                        </>
                    )
                )}
                </>
            </div>
    }

    {
        list==="favourit" && <div className="parent">
        {data.length!=0 && data.map(
            (movie : movieObject, idx : any) => (
                <>
                {/*<div>{movie}</div>*/}
                <MovieTileFavourite key={idx} movieName={movie} func={changeDisplay} setFavoriteModified={setFavoriteModified} count={favoriteModified}></MovieTileFavourite> 
                </>
            )
        )}
    </div>
    }



        </>
    ) 

    return el;


    
}

export default MovieListDisplay;
