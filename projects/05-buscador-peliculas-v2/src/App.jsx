import { useState } from 'react';
import { ListOfMovies } from './components/ListOfMovies';
import { useMovies } from './hooks/useMovies';

function App() {
  const [sort, setSort] = useState(false);
  const { search, movies, handleChange, buscarPeliculas, loading, error } =
    useMovies({ sort });

  const handleSort = () => {
    console.log('a')
    setSort(!sort);
  };

  return (
    <>
      <header>
        <form onSubmit={buscarPeliculas}>
          <input
            value={search}
            placeholder='Avengers, Star wars...'
            onChange={handleChange}
          />
          <input type='checkbox' onChange={handleSort} />
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
