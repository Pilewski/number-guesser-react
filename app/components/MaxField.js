const React = require('react');

class MaxField extends React.Component {
  render() {
    return(
      <div id="app-header">
        <input id="maximum"
        value={this.props.max}
        aria-label="Number guess input"
        onChange={(event) => this.props.setHighRange(event)}
        type="number" />
      </div>
    )
  }
};

module.exports = MaxField;
