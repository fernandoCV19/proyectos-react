import { useState, useRef, useMemo} from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search === previousSearch.current) {
        return;
      }

      previousSearch.current = search;
      try {
        setLoading(true);
        setError(null);
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  // const getMovies = useCallback(async ({ search }) => {
  //   if (search === previousSearch.current) {
  //     return;
  //   }

  //   previousSearch.current = search;
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     const newMovies = await searchMovies({ search });
  //     setMovies(newMovies);
  //   } catch (e) {
  //     setError(e.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading };
}
