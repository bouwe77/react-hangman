import React from "react";

class StartNewGame extends React.Component {
  handleClick = () => {
    this.props.startNewGame();
  };

  render = () => {
    return <button onClick={this.handleClick}>Start New Game</button>;
  };
}

export default StartNewGame;
