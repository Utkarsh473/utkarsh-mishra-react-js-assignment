import React, { useEffect, useState } from "react";
import axios from "axios";
import movie from "../model/movie"
import MovieTile from "./Movie-tile";
import "../index.css"

import {
    getMoviesinTheatres,
    getTopRatedMovies,
    getTopRatedIndia,
    getMoviescoming,
    getFavorite,
    addToFavorite
} from '../service/read-data';

type Props = {
    list : string;
}

function MovieListDisplay(props : Props){
    const {list} = props

    let  [data, setData] = useState([]);

    useEffect(() => {
            fetchData();
        }, [])

    const fetchData = async () => {
            try
            {
                switch (list)
                {
                    case "movies-coming": {
                        console.log("hello")
                        data = await getMoviescoming()
                        break;
            
                    }
            
                    case "movies-in-theaters": {
                        data = await getMoviesinTheatres();
                        break;

                    }
            
                    case "top-rated-india" :{
                        data = await getTopRatedIndia();
                        break;
                    }
            
                    case "top-rated-movies" :{
                        data = await getTopRatedMovies();
                        break;
                    }
            
                    case "favourit" :{
                        data = await getFavorite();
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

    
    
    console.log(data)

    const el = (
        <div className="parent">
            {data.map(
                (movie : any, idx : any) => (
                    <MovieTile title={movie.title} poster={movie.poster} posterurl={movie.posterurl}/>
                )
            )}
        </div>
    ) 

    return el;


    
}

export default MovieListDisplay;
