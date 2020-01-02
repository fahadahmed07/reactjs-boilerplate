import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class InputField extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.type}>{this.props.label}</label>
                <input type={this.props.type} 
                className="form-control form-control-sm" 
                id={this.props.type}
                placeholder={this.props.placeholder} 
                onChange={(e) => this.props.inputHandler(e.target.value, this.props.stateName)} />
            </div>
        );
    }
}
