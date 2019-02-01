import React from "react";

import Letter from "./Letter";

class ChooseLetter extends React.Component {
  render = () => {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return (
      <div>
        <Letter letter="A" />
      </div>
    );
  };
}

export default ChooseLetter;
