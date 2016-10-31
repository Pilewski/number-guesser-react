const React = require('react');

class SubmitButton extends React.Component {
  render() {
    return(
      <button
        className='guess-btn'
        onClick={this.props.checkGuess}
      >
        GUESS
      </button>
    )
  }
};

module.exports = SubmitButton;
