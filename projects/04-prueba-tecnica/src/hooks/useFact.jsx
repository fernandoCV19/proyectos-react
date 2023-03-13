import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export function useFact(){
  const [fact, setFact] = useState();

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact));
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return {fact, handleClick}
}