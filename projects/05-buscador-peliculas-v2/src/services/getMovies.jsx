const key = '91109d80';
export async function getMovies({ search }) {
  const newMovies = await fetch(
    `http://www.omdbapi.com/?apikey=${key}&s=${search}`
  );
  const json = await newMovies.json();

  return mappedMovies(json.Search);
}

function mappedMovies(movies) {
  if(!movies) return null;

  return movies.map((movie) => {
    return {
      id: movie.imdbID,
      year: movie.Year,
      title: movie.Title,
      poster: movie.Poster,
      type: movie.Type,
    };
  });
}
