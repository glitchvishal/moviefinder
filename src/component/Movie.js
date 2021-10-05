import React from 'react';


function Movie({ movie, details }) {

    const {imdbID, Title, Year, Poster} = movie

    return (
        <div className= "movieInfo">
            <img className="srcImg" src={Poster}  onClick={() => details(imdbID)} alt={Title} />
            <div className = "movieResult">
            <h2>Movie Name: {Title}</h2>
            <h3>Year:{Year}</h3>
            </div>
        </div>
    );
}

export default Movie;