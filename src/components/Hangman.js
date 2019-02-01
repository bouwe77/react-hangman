import React from "react";

import StartNewGame from "./StartNewGame";
import Word from "./Word";
import Letters from "./Letters";

const Hangman = props => {
  return (
    <div>
      <Word currentlyGuessed={props.currentlyGuessed} />
      <Letters
        chosenLetters={props.chosenLetters}
        chooseLetter={props.chooseLetter}
      />
      <StartNewGame startNewGame={props.startNewGame} />
    </div>
  );
};

export default Hangman;
