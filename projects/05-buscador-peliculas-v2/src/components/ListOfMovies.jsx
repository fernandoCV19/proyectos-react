import { Movie } from './Movie';

export function ListOfMovies({ movies }) {
  return (
    <section>
      {movies ? <FoundMovies movies={movies} /> : <NoFoundMovies />}
    </section>
  );
}

function FoundMovies({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} year={movie.year} poster={movie.poster} />
      ))}
    </>
  );
}

function NoFoundMovies() {
  return <p>No se encontraron resultados</p>;
}
