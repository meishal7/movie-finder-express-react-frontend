import { Fragment, useEffect, useState } from "react";
import { GlobalStyle } from "./style/globalStyles";
import Search from "./components/Search";
import Movie from "./components/Movie";

function App() {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("http://localhost:8080/?id=titanic");
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   fetchData();
  // }, []);
  const [movie, setMovie] = useState();

  const searchMovieHandler = (data) => {
    console.log(data);
    setMovie(data);
  };
  return (
    <Fragment>
      <GlobalStyle />
      <Search onSubmit={searchMovieHandler} />
      <Movie data={movie} />
    </Fragment>
  );
}

export default App;
