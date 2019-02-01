import React from "react";

import Letter from "./Letter";

class ChooseLetter extends React.Component {
  render = () => {
    let letters = [];
    for (const [letter] of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
      letters.push(<Letter key={letter} letter={letter} />);
    }

    return <ul>{letters} </ul>;
  };
}

export default ChooseLetter;
