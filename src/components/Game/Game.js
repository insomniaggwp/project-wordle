import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputWord from './InputWord';
import GuessList from './GuessList';
import WinnerBanner from '../Banner/WinnerBanner';
import LosserBanner from '../Banner/LosserBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log('answer', answer);

function Game() {
  const [guess, setGuess] = React.useState([]);
  const [isWinner, setIsWinner] = React.useState(false);
  const [isLosser, setIsLosser] = React.useState(false);

  const handleWordSubmit = (word) => {
    setGuess((prevState) => [...prevState, word]);
  };

  return (
    <>
      {isWinner && <WinnerBanner tryIn={guess.length} />}
      {isLosser && <LosserBanner />}
      <GuessList
        guess={guess}
        answer={answer}
        setWinner={(result) => setIsWinner(result)}
        setLosser={(result) => setIsLosser(result)}
      />
      <InputWord onSubmit={handleWordSubmit} />
    </>
  )
}

export default Game;
