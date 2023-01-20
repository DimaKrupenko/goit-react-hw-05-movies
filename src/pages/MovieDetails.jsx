import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../services/api';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const [movieId, setMovieId] = useState('');
  const [details, setDetails] = useState([]);

  const { Id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        setMovieId(Id);
        API.setMovieId(movieId);
        
        if (movieId) {
        const detailMovies = await API.getDetails(); 
        setDetails(detailMovies);
        return
        }
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [movieId, Id]);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        alt=""
      />
      <h2>
        {details.original_title}
        <br />
        {details.release_date}
      </h2>
      <p>User score: {details.popularity}</p>
      <p>
        Overview <br />
        {details.overview}
      </p>
      {/* <p>
        Genres <br />
        {details.genres.map(genre => genre.name)}
      </p> */}
      <p>
        <Link to='Cast'>Cast</Link>
      </p>
      <p>
        <Link to='Reviews'>Reviews</Link>
      </p>

              <Outlet />

    </div>
  );
};

export default MovieDetails;
