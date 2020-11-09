import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

import {connect} from 'react-redux';

import Login from './Login.js';
import Datapage from './Page.js';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact component={(this.props.token != null) ? Datapage : Login} />
            </Switch>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps, null) (Navigation);