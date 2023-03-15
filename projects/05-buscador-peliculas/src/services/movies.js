const key = '91109d80';

export const searchMovies = async({search}) => {

  console.log(search);
  if(search === ''){
    return null
  }

  try{
    const response = await  fetch(`http://www.omdbapi.com/?apikey=${key}&s=${search}`);
    const json = await response.json();
    const movies = json.Search

    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));

    return mappedMovies;
  }
  catch(e){
    throw new Error('Error buscando peliculas')
  }  
}