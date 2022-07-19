import React, { Component } from 'react';

export default class ContactDetails extends Component {
  render() {
    const details = (
    <div>
        <h4>{this.props.contact.name}</h4>
        <p>{this.props.contact.phone}</p>
    </div>);
    const blank = (<div></div>);

    return (
      <div className='result'>
        <h2>Details</h2>
        {this.props.isSelected ? details : blank}
        <button onClick={this.props.onRemove}>Remove</button>
      </div>
    )
  }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove: () => {console.error('onRemove not definded')}
}
