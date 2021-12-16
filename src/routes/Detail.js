import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SubDetail({ detail }) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{detail.title}</h2>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <img
          src={detail.medium_cover_image}
          alt={detail.title}
          style={{ borderRadius: 10 }}
        />
      </div>
      <br />
      <br />
      <div style={{ width: "80%", padding: 10 }}>
        <span style={{ textAlign: "center" }}>{detail.description_intro}</span>
      </div>
      <ul>
        {detail.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>{loading ? <h2>Loading...</h2> : <SubDetail detail={detail} />}</div>
  );
}

export default Detail;
