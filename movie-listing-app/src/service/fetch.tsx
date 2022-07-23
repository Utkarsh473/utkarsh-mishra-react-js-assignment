import React from "react";
import axios from "axios";
import {
    getMoviesinTheatres,
    getTopRatedMovies,
    getTopRatedIndia,
    getMoviescoming,
    getFavorite,
    addToFavorite
} from './read-data';

type Props = {
    list : string;
}

let data = {} as any


async function fetchdata(list: string)
    {
    try
    {

        
        switch (list)
        {
            case "movies-coming": {
                data = await getMoviescoming();
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
            default: 
                data = await getFavorite();
        }
        return data;
    }
    catch(error: any)
    {
        console.log(error.message);
    }
}


function MovieListDisplay(props : Props){
    const {list} = props

    const el = (
        <div>
            {/* {data.map(
                (movie : any, idx : any) => (
                    <MovieTile title={movie.title} posterurl={movie.posterurl}/>
                )
            )} */}
        </div>
    )

    return el;


    
}
console.log(data)

