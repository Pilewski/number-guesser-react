const React = require('react');

class GuessInput extends React.Component {
  render() {
    return(
      <div id="app-header">
        <input id="number"
        placeholder="Enter your guess!" aria-label="Number guess input"
        onChange={(event) => this.props.setNumber(event)}
        type="number" />
      </div>
    )
  }
};



module.exports = GuessInput;
