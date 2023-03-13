import './App.css';
import { useCatImage } from './hooks/useCatImage';
import { useFact } from './hooks/useFact';
const CAT_PREFIX_IMAGE_URL = `https://cataas.com/cat/says/`;

export function App() {
  const {fact, handleClick} = useFact();
  const {imageURL} = useCatImage({fact})

  return (
    <main>
      <h1>App de prueba</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact ? <p>{fact}</p> : null}
      {imageURL ? (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`}
          alt={'Image extracted using the first word from fact'}
        />
      ) : null}
    </main>
  );
}
