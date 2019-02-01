import React from "react";

class Letter extends React.Component {
  handleClick = e => {
    e.preventDefault();
    console.log(e.target.innerText + " was clicked.");
  };

  render() {
    return (
      <li>
        <a href="#" onClick={this.handleClick}>
          {this.props.letter}
        </a>
      </li>
    );
  }
}

export default Letter;
