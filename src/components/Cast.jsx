import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../services/api';

const Cast = () => {
    const [movieId, setMovieId] = useState('');
    const [actors, setActors] = useState('');
  
    const { Id } = useParams();
    useEffect(() => {
        const getCast = async () => {
            try {
        setMovieId(Id);
        API.setMovieId(movieId);
        
        if (movieId) {
        const actorlMovies = await API.getCast(); 
        setActors(actorlMovies);
        return
        }
         }
        catch (error) {
            console.log(error)
        }
       }
       getCast()
}, [movieId, Id])
    return (
        <div>
            <ul>
                {actors && actors.map(actor => (
                    <li key={actor.id}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid grey',
                        marginBottom: '10px'
                    }}
                    >
                        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" />
                        {actor.name}

                    </li>
                ))}
            </ul>
    </div>
)
}

export default Cast