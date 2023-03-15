import './App.css';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useRef } from 'react';

export function App2() {
  const { movies } = useMovies();
  const inputRef = useRef();

  const handleSubmit = () => {
    event.preventDefault();
    const inputEle = inputRef.current;
    const value = inputEle.value;
    console.log(value);
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder='Avengers, Avatar...' />
          <button type='submit'>
            Buscar
          </button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}