import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, deleteMovie } from './slices/moviesSlice';
import './App.scss';
import Card from './components/Card';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';

function App() {
  const dispatch = useDispatch();
  const { filteredList, currentPage, itemsPerPage, loading, error } = useSelector((state) => state.movies);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMovies = filteredList.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h1 className="title">Latest from the<br/>world of film.</h1>
      <div className="sortings">
        <h2 className="list__title">Movies</h2>
        <Pagination />

      </div>
      <div className="sub__sortings">
      <CategoryFilter />
      <div className="sort__wrapper">
          <div className="label__wrapper">
            <p className="label__tag">Results :</p>
            <p className="label__content">[{filteredList.length}]</p>
          </div>
        </div>
      </div>
      <div className="card__list">
        {currentMovies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            dislikes={movie.dislikes}
            liked={movie.liked}
            disliked={movie.disliked}
            onDelete={() => dispatch(deleteMovie(movie.id))}
          />
        ))}
      </div>
    </div>
  );
}


export default App;
