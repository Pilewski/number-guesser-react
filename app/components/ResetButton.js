import React, { Component } from 'react';

class ResetButton extends React.Component {
  render() {
    return(
      <button
        id='resetbtn'
        disabled={!this.props.message}
        onClick={this.props.resetGame}
      >
        RESET
      </button>
    )
  }
};

module.exports = ResetButton;
