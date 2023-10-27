import { useEffect, useState } from "react";

const Films = () => {
  const [film, SetFilm] = useState([]);

  const fetchFilm = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=beb6df2e&s=harry%20potter"
      );

      if (response.ok) {
        const data = await response.json();
        SetFilm(data.Search);
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchFilm();
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {film.map((movie) => (
          <div className="col mb-2 text-center px-1">
            <img
              className="img-fluid"
              src={movie.Poster}
              key={movie.imdbID}
              alt="movie picture"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Films;
