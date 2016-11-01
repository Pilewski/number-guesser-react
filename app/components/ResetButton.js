const React = require('react');

class ResetButton extends React.Component {
  render() {
    return(
      <button
        className='guess-btn'
        disabled={!this.props.message}
        onClick={this.props.resetGame}
      >
        RESET
      </button>
    )
  }
};

module.exports = ResetButton;
