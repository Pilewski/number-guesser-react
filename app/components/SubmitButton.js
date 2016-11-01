import React, { Component } from 'react';

class SubmitButton extends React.Component {
  render() {
    return(
      <button
        id='guessbtn'
        onClick={this.props.checkGuess}
      >
        GUESS
      </button>
    )
  }
};

module.exports = SubmitButton;
