import React, { Component, PropTypes } from 'react';

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func,
};
function createWarning(funcName){
    return () => console.warn(funcName +' is not definded');
}
const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
};

class Control extends Component {

  constructor(props){
    super(props)
  };

  render() {
    return (
      <div>
        <button onCLick={this.props.onPlus}>+</button>
        <button onCLick={this.props.onSubtract}>-</button>
        <button onCLick={this.props.onRandomizeColor}>Randomize Color</button>
      </div>
    )
  }
}



Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control;