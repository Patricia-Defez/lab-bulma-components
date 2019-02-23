import React, { Component } from 'react';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
// import './App.css';

export default class App extends Component {
    render() {

        return (
            <div className="conteiner">
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
                <CoolButton  class="is-danger is-rounded is-small">Button 1</CoolButton>
                <CoolButton class="is-small is-success">Button 2</CoolButton>
            </div>
        );
    }
}