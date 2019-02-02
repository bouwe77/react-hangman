//TODO ergens ervoor zorgen dat er woorden worden gekozen van minstens 1 letter en alleen a..z bevatten.

import React from "react";

import Hangman from "./Hangman";
import StringUtils from "../utils/StringUtils";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.maxAttempts = 5;
    this.words = ["hallo"];

    this.state = {
      solution: "",
      currentlyGuessed: "",
      gameOver: true,
      //  attempts: 0,
      chosenLetters: ""
    };
  }

  componentDidMount() {
    this.startNewGame();
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
    if (StringUtils.containsCaseInsensitive(this.state.chosenLetters, letter))
      return;

    // Add letter to chosenLetters
    let chosenLetters = this.state.chosenLetters + letter;
    this.setState({ chosenLetters: chosenLetters });

    console.log(letter);

    // Check solution contains letter. If so:
    let solutionContainsLetter = StringUtils.containsCaseInsensitive(
      this.state.solution,
      letter
    );
    if (solutionContainsLetter) {
      // Reset the currently guessed word by only showing the already guessed characters.
      let guessed = StringUtils.replaceCharacters(
        this.state.solution,
        "*",
        chosenLetters
      );
      this.setState({ currentlyGuessed: guessed });

      // If the guessed word is equal to the solution: game over.
      if (this.state.currentlyGuessed === this.state.solution) {
        this.setState({ gameOver: true });
      }
    } else {
      let attempts = this.state.attempts + 1;
      this.setState({ attempts });

      // If max attempts reached: game over.
      if (attempts > this.maxAttempts) {
        this.setState({ gameOver: true });
      }
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
