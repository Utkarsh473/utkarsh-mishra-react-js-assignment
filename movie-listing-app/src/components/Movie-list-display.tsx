import React, { useEffect, useState } from "react";
import axios from "axios";
import movie from "../model/movie"
import MovieTile from "./Movie-tile";
import "../index.css"
import movieObject from "../model/movie";

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
    list : string;
}

function MovieListDisplay(props : Props){
    const {list} = props

    let  [data, setData] = useState([]);


    useEffect(() => {
            fetchData();
        }, [list, data])

    const fetchData = async () => {
            try
            {
                switch (list)
                {
                    case "movies-coming": {
                        console.log("movies-coming")
                        data = await getMoviescoming()
                        //console.log(data)
                        /*data.map(
                            (movie : any, idx : any) => (console.log(movie))
                            )*/
                        break;
            
                    }
            
                    case "movies-in-theaters": {
                        console.log("movies-in-theaters")
                        data = await getMoviesinTheatres();
                        console.log(data)
                        break;

                    }
            
                    case "top-rated-india" :{
                        console.log("top-rated-india")
                        data = await getTopRatedIndia();
                        console.log(data)
                        break;
                    }
            
                    case "top-rated-movies" :{
                        console.log("top-rated-movies")
                        data = await getTopRatedMovies();
                        console.log(data)
                        break;
                    }
            
                    case "favourit" :{
                        console.log("favourit")
                        data = await getFavorite();
                        console.log(data)
                        break;
                    }
                }
                setData(data);
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
                {data.length!=0 && data.map(
                    (movie : movieObject, idx : any) => (
                        <>
                        {/*<div>{movie}</div>*/}
                        <MovieTile key={idx} movieName={movie}></MovieTile> 
                        </>
                    )
                )}
            </div>
    }

    {
        list==="favourit" && <div className="parent">
        {data.length!=0 && data.map(
            (movie : movieObject, idx : any) => (
                <>
                {/*<div>{movie}</div>*/}
                <MovieTileFavourite key={idx} movieName={movie}></MovieTileFavourite> 
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
