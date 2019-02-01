import React from "react";

import Word from "./Word";

const Game = props => {
  return (
    <div>
      <Word word={props.currentWord} />
    </div>
  );
};
export default Game;
