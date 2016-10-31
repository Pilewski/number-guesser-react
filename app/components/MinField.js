const React = require('react');

class MaxField extends React.Component {
  render() {
    return(
      <div id="app-header">
        <input id="minimum"
        value={this.props.min}
        aria-label="Number guess input"
        onChange={(event) => this.props.setLowRange(event)}
        type="number" />
      </div>
    )
  }
};

module.exports = MaxField;
