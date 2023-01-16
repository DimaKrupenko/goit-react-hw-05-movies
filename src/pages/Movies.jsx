import { API } from '../services/api'
import {  useState } from "react";


const Movies = () => {
    const [search, setSearch] = useState('')
    const [movieList, setMovieList] = useState('')
    
    console.log(movieList)
    const onChange = (evt) => {
        setSearch(evt.target.value)
        }
       
    const searchMovie = async () => {
           
        try {
                API.resetQuery()
                API.setQuery(search)
                const movie = await API.searchMovie()
                setMovieList(movie)
                console.log(movie)

            }
            catch (error) {
                console.log(error)
            }
}
    
    return (
        <div>
        <input type="text" onChange={onChange} />
        <button onClick={searchMovie}>Seacrh</button>
        </div>)
}

export default Movies