import React from "react";

class Letter extends React.Component {
  handleClick = e => {
    e.preventDefault();
    this.props.chooseLetter(e.target.innerText);
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        disabled={this.props.disabled}
        className="letter-button"
      >
        {this.props.letter}
      </button>
    );
  }
}

export default Letter;
