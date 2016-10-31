const React = require('react');

class ResetButton extends React.Component {
  render() {
    return(
      <button
        className='guess-btn'
        onClick={this.props.checkGuess}
      >
        RESET
      </button>
    )
  }
};

module.exports = ResetButton;
