import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'G', age: 28 },
      { name: 'Gwen', age: 28 },
      { name: 'Nick', age: 28 }
    ],
    otherState: 'Some Other Value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Gennaro';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Gwen', age: 28 },
        { name: 'Nick', age: 32 }
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'G', age: 28 },
        { name: event.target.value, age: 28 },
        { name: 'Nick', age: 32 }
      ]
    } )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
       <h1>Hi, I'm a React App!</h1>
       <p>This is really working!</p>
       <button 
       style={style}
       onClick={() => this.switchNameHandler('Gennaro!!')}>Switch Name</button>
       <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
       <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Gee!')} changed={this.nameChangedHandler}>My Hobbies: Yoga</Person>
       <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
