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
}

function MovieListDisplay(props : Props){
    const {list, filterKeyProp} = props

    /*
    console.log("list: "+list)
    console.log("key: "+filterKeyProp)
    */

    let  [data, setData] = useState([]);

    let [movieDetailShow, setMovieDetailShow] = useState(false);

    let [movieListShow, setMovieListShow] = useState(true);

    let [movieDetail, setMovieDetail] = useState({} as movieObject)



    const toggleState = (movieObj: movieObject) =>
    {
        setMovieDetailShow(movieDetailShow => !movieDetailShow)
        setMovieListShow(movieListShow => !movieListShow)

        setMovieDetail(movieObj)


        console.log("movieDetailsshow="+movieDetailShow)

    }


    useEffect(() => {
            fetchData();
        },[movieDetailShow, filterKeyProp, list])

    const fetchData = async () => {
            try
            {
                switch (list)
                {
                    case "movies-coming": {
                        console.log("movies-coming")
                        data = await getMoviescoming()
                        data = data.filter(
                            (item: any) => item.title.toUpperCase().includes(filterKeyProp.toUpperCase())
                        )
                        console.log(data)
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
                        data = await getMoviesinTheatres();
                        data = data.filter(
                            (item: any) => item.title.toUpperCase().includes(filterKeyProp.toUpperCase())
                        )
                        console.log(data)
                        break;

                    }
            
                    case "top-rated-india" :{
                        console.log("top-rated-india")
                        data = await getTopRatedIndia();
                        data = data.filter(
                            (item: any) => item.title.toUpperCase().includes(filterKeyProp.toUpperCase())
                        )
                        console.log(data)
                        break;
                    }
            
                    case "top-rated-movies" :{
                        console.log("top-rated-movies")
                        data = await getTopRatedMovies();
                        data = data.filter(
                            (item: any) => item.title.toUpperCase().includes(filterKeyProp.toUpperCase())
                        )
                        console.log(data)
                        break;
                    }
            
                    case "favourit" :{
                        console.log("favourit")
                        data = await getFavorite();
                        data = data.filter(
                            (item: any) => item.title.toUpperCase().includes(filterKeyProp.toUpperCase())
                        )
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
            movieListShow && list!=="favourit" && <div className="parent">
                <>
                {
                data.length!=0 && data.map(
                    (movie : movieObject, idx : any) => (
                        <>
                        <MovieTile key={idx} movieName={movie} func={toggleState}></MovieTile> 
                        </>
                    )
                )}
                </>
            </div>
    }

    {
        movieListShow && list==="favourit" && <div className="parent">
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

    { 
        movieDetailShow && <MovieDetails movie={movieDetail}></MovieDetails>
    }


        </>
    ) 

    return el;


    
}

export default MovieListDisplay;
