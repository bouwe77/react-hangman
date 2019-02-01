import React from "react";

import StartNewGame from "./StartNewGame";
import Word from "./Word";
import IncorrectLetters from "./IncorrectLetters";
import ChooseLetter from "./ChooseLetter";

const Hangman = props => {
  return (
    <div>
      <Word currentlyGuessed={props.currentlyGuessed} />
      <ChooseLetter />
      <IncorrectLetters incorrectLetters={props.incorrectLetters} />
      <StartNewGame startNewGame={props.startNewGame} />
    </div>
  );
};

export default Hangman;
