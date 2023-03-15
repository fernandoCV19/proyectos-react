export function Movie({title, year, poster}){
  return (
    <article>
      <h3>{title}</h3>
      <p>{year}</p>
      <img src={poster}/>
    </article>
  );
}