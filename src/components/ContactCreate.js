import React, { Component } from 'react'

export default class ContactCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: ''
        }
        this.handleChnage = this.handleChnage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }    
    handleChnage(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }
    handleClick(){
        
    }

    render() {
        return (
        <div>
            <h2>Cretate Contact</h2>
            <p>
                <input type="text" name="name" placeholder='Name' value={this.state.name} onChange={this.handleChnage}></input>
                <input type="text" name="phone" placeholder='Phone' value={this.state.phone} onChange={this.handleChnage}></input>
                <button>Create</button>
            </p>
        </div>
        )
    }
}
