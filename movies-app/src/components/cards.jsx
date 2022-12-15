import styles from "./cards.module.css";
import { useEffect, useState } from "react";
import Search from "./search";

const movie_link = "https://www.omdbapi.com/?apikey=45f0782a&s=war";

let all_movies = [];

function Cards() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(movie_link)
      .then((response) => response.json())
      .then((data) => {
        all_movies = data.Search;
        setMovies(data.Search);
      });
  }, []);

  const handleChange = (searchValue) => {
    // console.log(searchValue.target.value);
    let num = /^\d+$/.test(searchValue.target.value);

    if (num) {
      setError("There should atleast one Character");
    } else {
      setError(null);
    }

    setMovies(
      all_movies.filter((movie) =>
        movie.Title.toLowerCase().includes(
          searchValue.target.value.toLowerCase()
        )
      )
    );
  };
  // const value = document.getElementById("sear").value;

  return (
    <>
      <Search fu={handleChange} />

      <p className={styles.error}>{error ? error : ""}</p>

      <div className={styles.mov_list}>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <div className={styles.title}>
                <h4>{movie.Title}</h4>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.no_movie}>
            Movies You are trying to Search is not found!!!
          </p>
        )}
      </div>
    </>
  );
}

export default Cards;
