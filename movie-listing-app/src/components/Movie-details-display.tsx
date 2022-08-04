import React from "react";
import movieObject from "../model/movie";
import '../movieDetails.css'

type Props = {
    movie: movieObject
}

function MovieDetails(props : Props)
{
    const {movie} = props

    const el = (
        <div className="wrapper">
            
            <div className="image">
                <img src = {`/img/${movie.poster}`} alt={`/img/{movie.posterurl}`}/>
            </div>
            
            <div className="text">
                <h2>{movie.title}</h2>
                <table>
                    <tr>
                        <td>imdb Rating</td>
                        <td>{movie.imdbRating}</td>
                    </tr>
                    <tr>
                        <td>Content Rating</td>
                        <td>{movie.contentRating}</td>
                    </tr>
                    <tr>
                        <td>Average Rating</td>
                        <td>{movie.averageRating}</td>
                    </tr>

                    <tr>
                        <td>Duration</td>
                        <td>{movie.duration}</td>
                    </tr>

                    <tr>
                        <td>Genres</td>
                        <td>{movie.genres.join(', ')}</td>
                    </tr>

                    <tr>
                        <td>Actors</td>
                        <td>{movie.actors.join(', ')}</td>
                    </tr>

                    <tr>
                        <td>Release Date</td>
                        <td>{movie.releaseDate}</td>
                    </tr>

                    <tr>
                        <td>Storyline</td>
                        <td>{movie.storyline}</td>
                    </tr>
                    
                </table>
            </div>

        </div>
    )

    return el;


}

export {MovieDetails};