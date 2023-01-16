import { API } from '../services/api'
import { useState } from "react";
import { Link } from "react-router-dom";



const Movies = () => {
    const [search, setSearch] = useState('')
    const [movieLists, setMovieLists] = useState('')
    
    
    const onChange = (evt) => {
        setSearch(evt.target.value)
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
                <Link to={`${movieList.id}`} >
                    {movieList.title}
                </Link>
            </li>
            ))}
         </ul>
        </div>)
}

export default Movies