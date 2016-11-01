const React = require('react');

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
