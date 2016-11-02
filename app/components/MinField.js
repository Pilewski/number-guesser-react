import React, { Component } from 'react';

class MinField extends React.Component {
  render() {
    return(
      <span>
        <input id="input-min"
        value={this.props.min}
        aria-label="Number guess input"
        onChange={(event) => this.props.setLowRange(event)}
        type="number" />
      </span>
    )
  }
};

module.exports = MinField;
