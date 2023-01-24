import { useState, useEffect } from 'react';
import { API } from '../services/api';
import { Suspense } from "react";
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieId, setMovieId] = useState('');
  const [details, setDetails] = useState([]);
  // const location = useLocation()
  
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
    
    <div
       style={{
       
        display: 'flex',
        gap: '10px',
       flexWrap: 'wrap'
      }}
    >
      <div
        style={{
        display: 'flex',
    width: '100%',
    marginTop: '20px',
      }}
      >
      <Link to='/'>Go back</Link>

      </div>

      <img
        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        alt=""
      />
 
      <h2>
        {details.original_title}
        <br />
        {details.release_date}
      </h2>
      <p
        style={{
    width: '100%',
        }}
      >User score: {details.popularity}</p>
      <h3>Overview</h3>
      <p
        style={{
    width: '100%',
        }}
      >
        
        {details.overview}
      </p>
      {/* <p>
        Genres <br />
        {details.genres.name}
      </p> */}
       
      <h3
        style={{
    width: '100%',
        }}>Additional information</h3>
      <p>
        <Link to='Cast'>Cast</Link>
      </p>
      <p>
        <Link to='Reviews'>Reviews</Link>
      </p>
      <Suspense fallback={<div>Loading subpage...</div>}>
        
        <Outlet />

      </Suspense>

    </div>
  );
};

export default MovieDetails;
