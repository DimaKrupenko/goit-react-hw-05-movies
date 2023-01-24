import styles from './styles.css'
import { Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";


const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));



export const App = () => {
  return (
    <div className={styles.App}>
      <header>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/Movies">Movies</Link> 
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path=":Id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:Id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense> 
    </div>
  );
};



// a0a346c810a8c3392ff6f3a908f46de3