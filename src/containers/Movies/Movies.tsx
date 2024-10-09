import MovieForm from '../../components/MovieForm/MovieForm.tsx';
import MovieCard from '../../components/MovieCard/MovieCard.tsx';

const Movies = () => {


  return (
    <div className='d-flex flex-column'>
      <p>Enter title of movie</p>
      <MovieForm />
      <p>To watch list:</p>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default Movies;