import React from "react";

class Letter extends React.Component {
  handleClick = e => {
    e.preventDefault();
    console.log("The link was clicked.");
  };

  render() {
    return (
      <a href="#" onClick={this.handleClick}>
        {this.props.letter}
      </a>
    );
  }
}

export default Letter;
