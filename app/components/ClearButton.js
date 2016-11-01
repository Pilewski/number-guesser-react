const React = require('react');

class ClearButton extends React.Component {
  render() {
    return(
      <button
        id='clearbtn'
        disabled={!this.props.number}
        onClick={this.props.clearInput}
      >
        CLEAR
      </button>
    )
  }
};

module.exports = ClearButton;
