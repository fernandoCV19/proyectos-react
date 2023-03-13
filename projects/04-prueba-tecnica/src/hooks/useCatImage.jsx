import { useEffect, useState } from "react";
import { getImage } from "../services/images";

export function useCatImage({fact}){
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    if (!fact) return;
    getImage(fact).then(newUrl => setImageURL(newUrl))    
  }, [fact]);

  return {imageURL};
}