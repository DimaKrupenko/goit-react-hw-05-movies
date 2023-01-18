import styles from './styles.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import MovieDetails from '../pages/MovieDetails.jsx'
import Cast from './Cast'

export const App = () => {
  return (
    <div className={styles.App}
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <header>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/Movies">Movies</Link> 
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path=":Id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:Id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
        </Route>
       </Routes>
    </div>
  );
};



// a0a346c810a8c3392ff6f3a908f46de3