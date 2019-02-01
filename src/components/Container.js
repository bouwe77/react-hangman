import React from "react";

import Hangman from "./Hangman";

class Container extends React.Component {
  constructor(props) {
    super(props);

    //this.maxAttempts = 5;
    this.words = ["hoi", "hallo", "moio"];

    this.state = {
      solution: "",
      currentlyGuessed: "",
      gameOver: true,
      //  attempts: 0,
      //  correctLetters: [],
      incorrectLetters: ""
    };
  }

  startNewGame = () => {
    let randomWord = this.pickRandomWord();
    let currentlyGuessed = "*".repeat(randomWord.length);
    this.setState({ solution: randomWord, currentlyGuessed, gameOver: false });
  };

  pickRandomWord = () => {
    return this.words[Math.floor(Math.random() * this.words.length)];
  };

  applyLetter = letter => {};

  render() {
    return <Hangman {...this.state} startNewGame={this.startNewGame} />;
  }
}

export default Container;
