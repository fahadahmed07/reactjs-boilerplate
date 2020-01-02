import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class CustomBtn extends Component {
    render() {
        return (
            <button
                style={{ color: '#fff', backgroundColor: '#27aae1', cursor: 'pointer' }}
                type={this.props.type}
                onClick={this.props.btnHandler}
                className="btn" >{this.props.btnText}</button>
        );
    }
}
