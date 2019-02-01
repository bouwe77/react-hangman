//TODO ergens ervoor zorgen dat er woorden worden gekozen van minstens 1 letter en alleen a..z bevatten.

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

  applyLetter = letter => {
    // Check for A..Z, if not: return
    //
    // Check letter already has been guessed in both incorrectLetters and guessedWord, if so: return
    //
    // Check solution contains letter. If so:
    //  - replace letter in guessed word
    // . - if guessed word is equal to solution: game over
    //
    // If solution does not contain letter:
    // . - attempts++
    // . - add to incorrectLetters
    // . - check attempts against max: game over if max reached
  };

  render() {
    return <Hangman {...this.state} startNewGame={this.startNewGame} />;
  }
}

export default Container;
