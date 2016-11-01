import React, { Component } from 'react';

class Result extends React.Component {
  render() {
    return(
      <section className='result'>
        {this.props.message}
      </section>
    )
  }
};

module.exports = Result;
