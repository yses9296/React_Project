import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <div>
        <Contact></Contact>
      </div>
    )
  }
}
export default App;