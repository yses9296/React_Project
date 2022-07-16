import React, { Component } from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, {
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }]
        };
        
        this.handleChnage = this.handleChnage.bind(this);
    }

    handleChnage(e){
        this.setState({keyword: e.target.value})
    }
    
    render() {
        const mapToComponents = (data) => {
            return data.map((contact, i) => {
                return (<ContactInfo contact={contact} key={i}/>);
            });
        };
        
        return (
            <div>
                <h1>Contacts</h1>
                <input 
                    name="keyword" 
                    placeholder="Search" 
                    value={this.state.keyword}
                    onChange = {this.handleChnage}    
                >
                </input>
                <div>{mapToComponents(this.state.contactData)}</div>
            </div>
        );
    }
}
