import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Now is on React.</h1>
        <p>This is really working...</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My hobbies: Racing</Person>
        <Person name="Dew" age="48"/>

      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I \'m React app.'));
  }
}

export default App;
