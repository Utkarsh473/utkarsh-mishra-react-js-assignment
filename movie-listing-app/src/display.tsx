import React from "react";
import Navbar from "./components/Navbar";
import MovieListDisplay from "./components/Movie-list-display";


const display = (
    <>
        <Navbar>
            <MovieListDisplay list="movies-coming" filterKeyProp=""></MovieListDisplay>
            <MovieListDisplay list="movies-in-theaters" filterKeyProp=""></MovieListDisplay>
            <MovieListDisplay list="top-rated-india" filterKeyProp=""></MovieListDisplay>
            <MovieListDisplay list="top-rated-movies" filterKeyProp=""></MovieListDisplay>
            <MovieListDisplay list="favourit" filterKeyProp=""></MovieListDisplay>
        </Navbar>


    </>
)

export default display;