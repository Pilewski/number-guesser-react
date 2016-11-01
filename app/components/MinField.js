const React = require('react');

class MaxField extends React.Component {
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

module.exports = MaxField;
