//TODO ergens ervoor zorgen dat er woorden worden gekozen van minstens 1 letter en alleen a..z bevatten.

import React from "react";

import Hangman from "./Hangman";
import StringUtils from "../utils/StringUtils";

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
      chosenLetters: "ABC"
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

  chooseLetter = letter => {
    // Check for 1 letter A..Z,
    if (letter.length !== 1 || !/[a-z]/i.test(letter)) return;

    // Check letter already has been guessed.
    if (StringUtils.containsCaseInsensitive(this.state.shosenLetters, letter))
      return;

    // Add letter to chosenLetters
    let chosenLetters = this.state.chosenLetters;
    this.setState({ chosenLetters: (chosenLetters += letter) });

    console.log(letter);

    // Check solution contains letter. If so:
    let solutionContainsLetter = StringUtils.containsCaseInsensitive(
      this.state.solution,
      letter
    );
    if (solutionContainsLetter) {
      let guessed = this.state.currentlyGuessed;
      guessed = guessed.replace();
      //  - replace letter in guessed word
      // . - if guessed word is equal to solution: game over
    } else {
      // . - attempts++
      // . - add to chosenLetters
      // . - check attempts against max: game over if max reached
    }
  };

  render() {
    return (
      <Hangman
        {...this.state}
        startNewGame={this.startNewGame}
        chooseLetter={this.chooseLetter}
      />
    );
  }
}

export default Container;
