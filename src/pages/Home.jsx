import { API } from '../services/api'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Home = () => {
    const [popularFilms, setPopularFilms] = useState('')
    
    useEffect(() => {
        
        const addMaterial = async () => {
            try {
                const material = await API.addMaterial()
                setPopularFilms(material)
             }
            catch (error){
                console.log(error)
            }
            
        }
        addMaterial()

    }, [])
         
      
    
    return(
        <div>
            <h1>Trending today</h1>
                <ul>
                    {popularFilms && popularFilms.map(popularFilm => (
                    <li key={popularFilm.id}>
                        <Link to={`${popularFilm.id}`} >
                        {popularFilm.title}
                        </Link>
                    </li>
                    ))}
                </ul>
    </div>
)
}

export default Home