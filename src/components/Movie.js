import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";
import home_styles from "../css/Home.module.css";

/**
 * Link
 * - 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
 */

function Movie({ movies }) {
  return (
    <div className={home_styles.movies}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.movie}>
          <img
            src={movie.medium_cover_image}
            alt={movie.title}
            className={styles.movie__img}
          />
          <Link to={`/movie/${movie.id}`}>
            <h2 className={styles.movie__title}>{movie.title}</h2>
          </Link>
          <h3 className={styles.movie__year}>{movie.year}</h3>
          <p>
            {movie.summary.length > 235
              ? `${movie.summary.slice(0, 235)}...`
              : movie.summary}
          </p>
          <ul className={styles.movie__genres}>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

Movie.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Movie;
