import React from "react";
import { TURNS } from "../constants";
import { Square } from "./Square";

export function ActualPlayer({turn}) {
  return (
    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
}
