require('../style/reset');
require('../style/style');
const React = require('react');
const GuessInput = require('../components/GuessInput');
const SubmitButton = require('../components/SubmitButton');


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      number: '',
      randomNumber: ''
    };
  }

  setGuess(location){
    let userInput = parseInt(location.target.value);
    this.setState({number: userInput});
  }

  checkGuess() {
    console.log(yo);
  }

  componentDidMount () {
    let savedNumber = JSON.parse(localStorage.getItem('number'));
    let randomNumber = Math.floor(Math.random()*100+1);
    if (savedNumber !== null){
      this.setState({'randomNumber': savedNumber});
    } else {
      localStorage.setItem('randomNumber', randomNumber);
      this.setState({'randomNumber': randomNumber});
    }
  }

  render(){

    return (
    <div>
      <h1> NUMBER GUESSER </h1>
      <GuessInput setGuess={this.setGuess}/>
      <SubmitButton checkGuess={this.checkGuess}/>
    </div>
    )
  }
};

module.exports = App;
