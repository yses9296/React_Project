import React, { Component } from 'react';
import Contact from './Contact';

export default class ContactDetails extends Component {
  constructor(props){

    super(props);

    this.state = {
      isEdit : false,
      name: '',
      phone: ''
    }
    this.handleChnage = this.handleChnage.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChnage(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleToggle(){
    if(!this.state.isEdit){
      this.setState({
        name:this.props.contact.name,
        phone:this.props.contact.phone,
      })
    }
    else {
      this.handleEdit();
    }

    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  handleEdit(){
    this.props.onEdit(this.state.name, this.state.phone)
  }
  handleKeyPress(e){
    if(e.charCode == 13){ //charCode == 13 >> enter
        this.handleToggle();
    }
  }
  render() {
    const details = (
      <div>
          <h4>{this.props.contact.name}</h4>
          <p>{this.props.contact.phone}</p>
      </div>
    ); 
    const edit = (
      <div>
          <p>
            <input 
              type="text" 
              name="name" 
              placeholder='Name' 
              value={this.state.name} 
              onChange={this.handleChnage}>
            </input>
          </p>
          <p>
            <input 
              type="text" 
              name="phone" 
              placeholder='Phone' 
              value={this.state.phone} 
              onChange={this.handleChnage} 
              onKeyPress={this.handleKeyPress}>
            </input>
          </p>
      </div>
    );
    const blank = (<div>Not Selected</div>);  
    const view = this.state.isEdit ? edit : details;

    return (
      <div className='result'>
        <h2>Details</h2>
        {this.props.isSelected ? view : blank}
        <p>        
          <button onClick={this.handleToggle}>
            {this.state.isEdit ? 'OK' : 'Edit'}
          </button>
          <button onClick={this.props.onRemove}>Remove</button>
        </p>
      </div>
    )
  }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove: () => {console.error('onRemove not definded')},
    onEdit: () => {console.error('onEdit not definded')}
}
ContactDetails.propTypes = {
  contact: React.PropTypes.object,
  onRemove: React.PropTypes.func,
  onEdit: React.PropTypes.func
}