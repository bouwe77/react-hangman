import React from "react";

import Letter from "./Letter";
import StringUtils from "../utils/StringUtils";

const Letters = props => {
  let letters = [];
  for (const [letter] of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    let letterAlreadyChosen = StringUtils.containsCaseInsensitive(
      props.chosenLetters,
      letter
    );

    letters.push(
      <Letter
        key={letter}
        letter={letter}
        chooseLetter={props.chooseLetter}
        disabled={letterAlreadyChosen}
      />
    );
  }

  return <div width="50">{letters}</div>;
};

export default Letters;