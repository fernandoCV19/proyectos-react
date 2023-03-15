import { ListOfMovies } from './components/ListOfMovies';
import { useMovies } from './hooks/useMovies';

function App() {
  const { search, movies, handleChange, buscarPeliculas, loading, error } =
    useMovies();

  return (
    <>
      <header>
        <form onSubmit={buscarPeliculas}>
          <input
            value={search}
            placeholder='Avengers, Star wars...'
            onChange={handleChange}
          />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {loading ? (
          <p>Las peliculas se estan cargando</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ListOfMovies movies={movies} />
        )}
      </main>
    </>
  );
}

export default App;
