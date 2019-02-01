import React from "react";

import StartNewGame from "./StartNewGame";

class Hangman extends React.Component {
  constructor(props) {
    super(props);

    //this.maxAttempts = 5;
    //this.words = ["hoi", "hallo", "moio"];

    this.state = {
      //  currentWord: "",
      //  attempts: 0,
      //  correctLetters: [],
      //  incorrectLetters: []
    };
  }

  render() {
    return (
      <div>
        <StartNewGame />
      </div>
    );
  }
}

export default Hangman;
