import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MovieListDisplay from "./components/Movie-list-display";
import movieObject from "./model/movie";
import { MovieDetails } from "./components/Movie-details-display";
import Navbar_movieDetails from "./components/Navbar-movieDetails";


function Display()
{


    let [activeChild, setActiveChild] = useState(0)

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



    useEffect(()=> {

    }, [movieDetailShow, movieListShow, activeChild])

    // console.log("state changed to "+activeChild)


    const el = (

        <>
            {

            movieListShow && <Navbar activeChild={activeChild} setActiveChild={setActiveChild}>
                <MovieListDisplay list="movies-coming" filterKeyProp="" changeDisplay={toggleState}></MovieListDisplay>
                <MovieListDisplay list="movies-in-theaters" filterKeyProp="" changeDisplay={toggleState}></MovieListDisplay>
                <MovieListDisplay list="top-rated-india" filterKeyProp="" changeDisplay={toggleState}></MovieListDisplay>
                <MovieListDisplay list="top-rated-movies" filterKeyProp="" changeDisplay={toggleState}></MovieListDisplay>
                <MovieListDisplay list="favourit" filterKeyProp="" changeDisplay={toggleState}></MovieListDisplay>
            </Navbar>

            }

            {
                
                movieDetailShow && 
                <>
                <Navbar_movieDetails changeDisplay={toggleState}></Navbar_movieDetails>
                <MovieDetails movie={movieDetail}></MovieDetails>
                </>
            }


        </>
    )

    return el;
}

export default Display;