import React, { Component } from "react";


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: props.data.avatar,
            fn: props.data.first_name,
            ln: props.data.last_name,
            email: props.data.email,
            poping_up: false
        };
    }

    render() {
        return (<div className='li_contain' onClick={() => this.setState({poping_up: !this.state.poping_up})}>
            {(this.state.poping_up)?<img src={this.state.img}/>:<></>}
            <p className='name'>{this.state.fn} {this.state.ln}</p>
            {(this.state.poping_up)?<p className='email'>{this.state.email}</p>:<></>}
        </div>);
    }
}

export default (User);