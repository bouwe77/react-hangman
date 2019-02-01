import React from "react";

import StartNewGame from "./StartNewGame";
import Word from "./Word";
import IncorrectLetters from "./IncorrectLetters";

const Hangman = props => {
  return (
    <div>
      <Word currentlyGuessed={props.currentlyGuessed} />
      <IncorrectLetters incorrectLetters={props.incorrectLetters} />
      <StartNewGame startNewGame={props.startNewGame} />
    </div>
  );
};

export default Hangman;
