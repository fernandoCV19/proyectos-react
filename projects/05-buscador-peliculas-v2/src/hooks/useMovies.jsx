import { useState, useRef, useCallback } from 'react';
import { getMovies } from '../services/getMovies';
import debounce from 'just-debounce-it';

export function useMovies() {
  const [movies, setMovies] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const lastSearch = useRef(null);

  const debounceMovies = useCallback(
    debounce(async (newSearch) => {
      setLoading(true);
      const newMovies = await getMovies({ search: newSearch });
      setLoading(false);
      setMovies(newMovies);
    }, 300),
    []
  );

  const handleChange =  (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(' ')) {
      setError('No puedes iniciar con un espacio en blanco');
      return;
    }

    setSearch(newSearch);

    if (newSearch.length <= 3) {
      setError('Debes ingresar al menos 4 caracteres');
      return;
    }

    setError(null);
    debounceMovies(newSearch);
  };

  const buscarPeliculas = async (event) => {
    event.preventDefault();

    if (search === lastSearch.current) return;

    lastSearch.current = search;
    const newMovies = await getMovies({ search });
    setMovies(newMovies);
  };

  return { movies, handleChange, buscarPeliculas, loading, error };
}
