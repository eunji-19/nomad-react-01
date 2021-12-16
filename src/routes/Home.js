import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.2&sort_by=year`
    // );
    // const json = await response.json();

    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h2 style={{ color: "#838383" }}>Loading...</h2>
      ) : (
        <Movie movies={movies} />
      )}
    </div>
  );
}

export default Home;
