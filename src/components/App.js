import React, { Component } from 'react'

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
        <h1>Hello React This is New World</h1>
        <h2>{this.state.name}</h2>

        <button onClick={ () => {this.setState({name: 'Eunseo'})}}>
          Click Me
        </button>
      </div>
    )
  }
}
export default App;