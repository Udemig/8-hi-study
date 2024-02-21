import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseImgUrl, options } from '../constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold mb-3">{genre.name}</h1>

      <Splide
        options={{
          autoWidth: true,
          rewind: true,
          gap: '10px',
          lazyLoad: true,
        }}
        aria-label="Movies"
      >
        {!movies && (
          <div className="h-[300px] flex items-center">
            <Loader />
          </div>
        )}

        {movies?.map((movie) => (
          <SplideSlide>
            <Link to={`/detay/${movie.id}`}>
              <img
                height={300}
                className="max-w-[300px] h-full cursor-pointer rounded"
                src={baseImgUrl + movie.poster_path}
                alt={movie.title}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
