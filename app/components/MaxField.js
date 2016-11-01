const React = require('react');

class MaxField extends React.Component {
  render() {
    return(
      <span>
        <input id="input-max"
        value={this.props.max}
        aria-label="Number guess input"
        onChange={(event) => this.props.setHighRange(event)}
        type="number" />
      </span>
    )
  }
};

module.exports = MaxField;
