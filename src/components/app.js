import React, { Component } from 'react';
import CurrentDate from './currentdate';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
          <h1>Andrew's JS Challenges</h1>
          
          <div className='current_date'>
            <h2>Current Date</h2>
            <CurrentDate/>
          </div>
      </div>
    );
  }
}
