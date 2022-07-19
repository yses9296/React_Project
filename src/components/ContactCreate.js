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
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }    
    handleChnage(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }
    handleClick(){
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);

        this.setState({
            name: '',
            phone: ''
        });

        this.nameInput.focus();
    };
    handleKeyPress(e){
        if(e.charCode == 13){ //charCode == 13 >> enter
            this.handleClick();
        }
    }

    render() {
        return (
        <div>
            <h2>Cretate Contact</h2>
            <p>
                <input 
                    type="text" 
                    name="name" 
                    placeholder='Name' 
                    value={this.state.name} 
                    onChange={this.handleChnage}
                    ref= {(ref) => { this.nameInput = ref }}
                    >
                </input>
                <input 
                    type="text"
                    name="phone" 
                    placeholder='Phone' 
                    value={this.state.phone} 
                    onChange={this.handleChnage} 
                    onKeyPress={this.handleKeyPress}>
                </input>
                <button onClick={this.handleClick}>Create</button>
            </p>
        </div>
        )
    }
}


ContactCreate.propTypes = {
    onCreate : React.PropTypes.func
}
ContactCreate.defaultProps = {
    onCreate: () => {console.error('onCreate not defined')}
}