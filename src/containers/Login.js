import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {setToken} from './../actions/actions.js';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: 'eve.holt@reqres.in',
            password: 'cityslicka',
            error: '',
            status: 0,
            typeAlert: 0
        };

        this.loginization = this.loginization.bind(this);
    }

    validation() {
        
        let lastAtPos = this.state.login.lastIndexOf('@');
        let lastDotPos = this.state.login.lastIndexOf('.');

        if (this.state.password.length < 8) {
            this.setState({typeAlert: 3});
            console.log(3);
            return false;
        } else if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.login.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.login.length - lastDotPos) > 2)) {
            this.setState({typeAlert: 2});
            console.log(2);
            return false;
        } else {
            return true;
        }
    }

    loginization() {
        if (this.validation()) {
            
            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.login,
                    password: this.state.password
                })
            })
            .then(response => (response.ok) ? response.json(): this.setState({status: response.status}) )
            .then(object => {
                if (this.state.status === 200 || this.state.status === 0) {
                    const result = object;
                    this.props.set(object.token);
                    // console.log(result);
                } else if (this.state.status === 400) {
                    console.log(this.state.status);
                    this.setState({error: 'Uncorrect e-mail or password', typeAlert: 1});
                } else {
                    console.log(this.state.status);
                    this.setState({error: 'Some troubles with server (response status = ' + this.state.status + ' )', typeAlert: 1});
                }
            });
        }
    }

    render() {
        return (
            <div className='login'>
                <img src='./img/logo.png'/>
                <h2 className='login_title'>Login</h2>
                {(this.state.typeAlert === 1) ? <p className='alert'>{this.state.error}</p> : <></>}
                {(this.state.typeAlert === 2) ? <p className='alert'>Please, enter valid e-mail</p> : <></>}
                <input type='text' placeholder='e-mail' value={this.state.login} onChange={(e) => this.setState({login: e.target.value, typeAlert: 0})}/>
                {(this.state.typeAlert === 3) ? <p className='alert'>Password must be more 8 symbols</p> : <></>}
                <input type='password' placeholder='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value, typeAlert: 0})}/>
                <br/>
                <br/>
                <button onClick={this.loginization}>Submit</button>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({set: setToken}, dispatch);
}

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps, matchDispatchToProps) (Login);