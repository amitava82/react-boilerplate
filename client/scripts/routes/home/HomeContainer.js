/**
 * Created by amitava on 29/05/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

@connect(state => state)
export default class HomeContainer extends React.Component {
    render(){
        return (
            <div className="home-container">
                <Helmet title="Home" />
                <h1>Hello world</h1>
            </div>
        )
    }
}