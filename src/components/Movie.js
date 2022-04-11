import React from "react";
import styled from "styled-components";

const MovieStyle = styled.div`
  width: 60%;
  margin: 0 auto;
  /* padding: var(--div-padding) var(--div-padding); */

  margin-top: var(--div-margin);
  color: white;
  .title {
    font-size: 40px;
    margin: 0 0;
  }
`;

const Movie = ({ data }) => {
  if (!data) return;
  console.log(data);
  return (
    <MovieStyle>
      <div className="header">
        <h3 className="title">{data.Title}</h3>
        <p>
          {data.Year} {data.Rated} {data.Runtime}
        </p>
      </div>
      <div className="poster">
        <img src={data.Poster} alt="Movie poster" />
      </div>
      <div className="movie-info">
        <p>Genre: {data.Genre}</p>
        <p>{data.Plot}</p>
        <p>Director: {data.Director}</p>
        <p>Writer: {data.Writer}</p>
        <p>Actors: {data.Actors}</p>
      </div>
    </MovieStyle>
  );
};

export default Movie;
