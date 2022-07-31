import React from "react";
import Navbar from "./components/Navbar";
import MovieListDisplay from "./components/Movie-list-display";

const display = (
    <>
        <Navbar>
        <MovieListDisplay list="movies-coming" ></MovieListDisplay>
        <MovieListDisplay list="movies-in-theaters" ></MovieListDisplay>
        <MovieListDisplay list="top-rated-india" ></MovieListDisplay>
        <MovieListDisplay list="top-rated-movies" ></MovieListDisplay>
        <MovieListDisplay list="favourit" ></MovieListDisplay>
        </Navbar>
    </>
)

export default display;