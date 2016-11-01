import React, { Component } from 'react';

class GuessInput extends React.Component {
  render() {
    return(
      <span>
        <input id="guess"
        max='100'
        min='0'
        value={this.props.number}
        placeholder="Enter your guess!"
        aria-label="Number guess input"
        onChange={(event) => this.props.setGuess(event)}
        type="number" />
      </span>
    )
  }
};

module.exports = GuessInput;
