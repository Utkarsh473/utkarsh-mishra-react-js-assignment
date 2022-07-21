import React from "react";
import axios from "axios";

const getMoviescoming = () => {

    return axios.get('http://localhost:3001/movies-coming')
    .then(response => response.data)
    .catch(error => console.log(error));

}

const getMoviesinTheatres = () => {

    return axios.get('http://localhost:3001/movies-in-theaters')
    .then(response => response.data)
    .catch(error => console.log(error));

}

const getTopRatedIndia = () => {

    return axios.get('http://localhost:3001/top-rated-india')
    .then(response => response.data)
    .catch(error => console.log(error));

}

const getTopRatedMovies = () => {

    return axios.get('http://localhost:3001/top-rated-india')
    .then(response => response.data)
    .catch(error => console.log(error));

}

const getFavorite = () => {

    return axios.get('http://localhost:3001/favorit')
    .then(response => response.data)
    .catch(error => console.log(error));

}

const addToFavorite = (data: any) => {

    return axios.post('http://localhost:3001/favorit', 
    data,
    {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.data)
    .catch(error => console.log(error));

}



export {
    getMoviesinTheatres,
    getTopRatedMovies,
    getTopRatedIndia,
    getMoviescoming,
    getFavorite,
    addToFavorite
}









