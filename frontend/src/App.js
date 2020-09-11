import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 30},
      { name: 'Manu', age: 29},
      { name: 'Stephane', age: 26}
    ],
    otherState: 'some other state'
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    // Don't Do THIS: this.state.persons[0].name = 'Dew';
    this.setState({
      persons: [
        { name: 'Maximilian', age: 30},
        { name: 'Manu', age: 34},
        { name: 'Stephane', age: 27}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, Now is on React.</h1>
        <p>This is really working...</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I \'m React app.'));
  }
}

export default App;
