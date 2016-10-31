const React = require('react');

class ResetButton extends React.Component {
  render() {
    return(
      <button
        className='guess-btn'
        onClick={this.props.resetGame}
      >
        RESET
      </button>
    )
  }
};

module.exports = ResetButton;
