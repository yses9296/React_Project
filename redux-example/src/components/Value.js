import React, { Component, PropTypes } from 'react';

//propTypes ERROR

// const propTypes = {
//     number: PropTypes.number
// };
// const defaultProps = {
//     number: -1
// };

export default class Value extends Component {

  constructor(props){
    super(props);
    this.state = {
        number: -1
    }
  };

  render() {
    console.log('Value.js')
    return (
      <div>
        <h1>{this.state.number}</h1>
      </div>
    )
  }
}



// Value.propTypes = propTypes;
// Value.defaultProps = defaultProps;

