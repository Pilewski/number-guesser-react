import '../style/style';
import React, { Component } from 'react';
import GuessInput from '../components/GuessInput';
import SubmitButton from '../components/SubmitButton';
import ClearButton from '../components/ClearButton';
import ResetButton from '../components/ResetButton';
import MaxField from '../components/MaxField';
import MinField from '../components/MinField';
import Result from '../components/Result';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      number: '',
      randomNumber: '',
      min: 0,
      max: 100,
      message: ''
    };
  }
  checkGuess() {
    let message;
    if (this.state.randomNumber === this.state.number){
      message = <p>Nice work! You guessed {this.state.randomNumber} correctly 😎</p>;
      this.setState({'message':message});
      this.correctGuess();
    } else if (this.state.min < this.state.number && this.state.number< this.state.randomNumber) {
      message = <p>Sorry! {this.state.number} was too low 😬</p>;
      this.setState({'message':message});
    } else if (this.state.max > this.state.number && this.state.number> this.state.randomNumber) {
      message = <p>Sorry! {this.state.number} was too high 😬</p>;
      this.setState({'message':message});
    } else if (isNaN(this.state.number) || this.state.number === '') {
      message = <p>Your guess was not a number!! 😱</p>
      this.setState({'message':message});
    } else {
      message = <p>{this.state.number} was not in range!! 😖</p>
      this.setState({'message':message});
    }
  }
  clearInput() {
    this.setState({number: ''});
  }
  resetGame() {
    this.setState({number: ''});
    let randomNumber = Math.floor(Math.random()*100+1);
    localStorage.setItem('randomNumber', randomNumber);
    this.setState({'randomNumber': randomNumber, 'message': '', 'min': 0, 'max': 0});
  }
  setGuess(location){
    let userInput = parseInt(location.target.value);
    this.setState({number: userInput});
  }
  setLowRange(location){
    let userInput = parseInt(location.target.value);
    let randomNumber = Math.floor(Math.random()*(this.state.max - userInput)+userInput);
    localStorage.setItem('randomNumber', randomNumber);
    this.setState({'randomNumber': randomNumber, min: userInput});
  }
  setHighRange(location){
    let userInput = parseInt(location.target.value);
    let randomNumber = Math.floor(Math.random()*(userInput - this.state.min)+this.state.min);
    localStorage.setItem('randomNumber', randomNumber);
    this.setState({'randomNumber': randomNumber, max: userInput});
  }
  correctGuess(){
    this.setState({number: ''});
    let randomNumber = Math.floor(Math.random()*100+1);
    this.setState({'randomNumber': randomNumber});
    localStorage.setItem('randomNumber', randomNumber);
    this.setState({max: this.state.max+10});
    this.setState({min: this.state.min-10});
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
    <div className='container'>
      <h1> NUMBER GUESSER </h1>
      <GuessInput number={this.state.number} setGuess={this.setGuess.bind(this)}/>
      <SubmitButton checkGuess={this.checkGuess.bind(this)}/>
      <ClearButton number={this.state.number} clearInput={this.clearInput.bind(this)}/>
      <ResetButton message={this.state.message} min={this.state.min} max={this.state.max} number={this.state.number} resetGame={this.resetGame.bind(this)}/>
      <MinField min={this.state.min} setLowRange={this.setLowRange.bind(this)}/>
      <MaxField max={this.state.max} setHighRange={this.setHighRange.bind(this)}/>
      <Result message={this.state.message}/>
    </div>
    )
  }
};

module.exports = App;
