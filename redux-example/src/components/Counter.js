import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';

const propTypes = {

};
const defaultProps = {

};

class Counter extends Component {

  constructor(props){
    super(props)
  };

  render() {
    console.log('Counter.js')
    return (
      <div>
        <Value/>
        <Control/>
      </div>
    )
  }
}



Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;
export default Counter;