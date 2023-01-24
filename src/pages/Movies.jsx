import { API } from '../services/api'
import { useState } from "react";
import { useSearchParams, Link, useLocation  } from "react-router-dom";

 

const Movies = () => {
    const [search, setSearch] = useState('')
    const [movieLists, setMovieLists] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    
    const location = useLocation()

    console.log(searchParams)
    const onChange = (evt) => {
        setSearch(evt.target.value)
        setSearchParams({ filter: evt.target.value })
        }
    
    const searchMovie = async () => {
           
        try {
                API.resetQuery()
                API.setQuery(search)
                const movie = await API.searchMovie()
                setMovieLists(movie)

            }
            catch (error) {
                console.log(error)
            }
    }
    
 
    
    return (
        <div>
        <input type="text" onChange={onChange} />
        <button onClick={searchMovie}>Seacrh</button>
        <ul>
            {movieLists && movieLists.map(movieList => (
            <li key={movieList.id}>
                <Link to={`${movieList.id}`} state={{from: location}} >
                    {movieList.title}
                </Link>
            </li>
            ))}
         </ul>
        </div>)
}

export default Movies;
