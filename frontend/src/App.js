import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './User/UserInput'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 30},
      { name: 'Manu', age: 29},
      { name: 'Stephane', age: 26}
    ],
    otherState: 'some other state'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // Don't Do THIS: this.state.persons[0].name = 'Dew';
    this.setState({
      persons: [
        { name: newName, age: 30},
        { name: 'Manu', age: 34},
        { name: 'Stephane', age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 30},
        { name: event.target.value, age: 34},
        { name: 'Stephane', age: 27}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello, Now is on React.</h1>
        <p>This is really working...</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilium')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Maxi')}
          changed={this.nameChangedHandler} >My hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        <UserInput />
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I \'m React app.'));
  }
}

export default App;
