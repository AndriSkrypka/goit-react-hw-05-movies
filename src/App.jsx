import { Route, Routes } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import { Navigation } from './components/Navigation/Navigation';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import styles from './App.module.css';




const Home = lazy(() => import('./Pages/Home/Home'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const NotFound = lazy(() => import('./Pages/NotFound'));

export const App = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/goit-react-hw-05-movies/" element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />}></Route>
          <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
};
