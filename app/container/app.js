require('../style/reset');
require('../style/style');
const React = require('react');

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      number: ''
    };
  }

  setLocation(location){
    let userInput = location.target.value;
    this.setState({number: userInput});
  }

  componentDidMount () {
    let savedNumber = JSON.parse(localStorage.getItem('number'));
    if (savedNumber !== null){
      this.setState({'number': savedNumber});
    }
  }

  render(){
    return (
    <div>
    </div>
    )
  }
};



module.exports = App;
