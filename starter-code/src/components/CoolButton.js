import React, { Component } from 'react';

export default class CoolButton extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return (
                <button className={"button " + this.props.class }>{this.props.children}</button>  
        )
    }

}