const React = require('react');

class MaxField extends React.Component {
  render() {
    return(
      <div id="app-header">
        <input id="minimum"
        placeholder="Minimum"
        aria-label="Number guess input"
        onChange={(event) => this.props.setLowRange(event)}
        type="number" />
      </div>
    )
  }
};

module.exports = MaxField;
