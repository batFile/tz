import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {setToken} from './../actions/actions.js';

import User from './../components/User.js';

class Page extends Component {
    constructor() {
        super();
        this.state = {
            total_pages: 0,
            page: 1,
            data: [],
        };
    }
    
    getUsers = () => {
        fetch('https://reqres.in/api/users?page=' + this.state.page)
            .then(response => response.json())
            .then(result => this.setState({data: result.data, total_pages: result.total_pages}))
            .catch(e => console.log(e));
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (
            <section className='list'>
                <div className='data_contain'>
                    {this.state.data.map(data => {
                        return <User key={`data-${data.id}`} data={data}/>
                    })}
                </div>
                <br/>
                <div className='contain_nav'>
                    <button disabled={(this.state.page === 1) ? true : false} onClick={() => this.setState({page: this.state.page - 1},this.getUsers)} className='prev'>&lt;</button>
                    <button disabled={(this.state.page === this.state.total_pages) ? true : false} onClick={() => this.setState({page: this.state.page + 1},this.getUsers)} className='next'>&gt;</button>
                </div>
                <button onClick={() => {this.props.set(null)}} className='exit'>Exit &times;</button>
            </section>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({set: setToken}, dispatch);
}

export default connect(null, matchDispatchToProps) (Page);