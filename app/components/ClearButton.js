const React = require('react');

class ClearButton extends React.Component {
  render() {
    return(
      <button
        className='guess-btn'
        disabled={!this.props.number}
        onClick={this.props.clearInput}
      >
        CLEAR
      </button>
    )
  }
};

module.exports = ClearButton;
