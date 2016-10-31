const React = require('react');

class GuessInput extends React.Component {
  render() {
    return(
      <div id="app-header">
        <input id="number"
        max='100'
        min='0'
        placeholder="Enter your guess!"
        aria-label="Number guess input"
        onChange={(event) => this.props.setGuess(event)}
        type="number" />
      </div>
    )
  }
};

module.exports = GuessInput;
