import React from "react";

import StartNewGame from "./StartNewGame";
import Word from "./Word";
import Alphabet from "./Alphabet";

const Hangman = props => {
  return (
    <div>
      <Word currentlyGuessed={props.currentlyGuessed} />
      <Alphabet
        chosenLetters={props.chosenLetters}
        chooseLetter={props.chooseLetter}
      />
      <StartNewGame startNewGame={props.startNewGame} />
    </div>
  );
};

export default Hangman;
