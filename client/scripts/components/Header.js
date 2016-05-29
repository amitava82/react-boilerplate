import React from 'react';
import {connect} from 'react-redux';

@connect(state => state)
export default class Header extends React.Component {

    render () {
        return (
            <div className="header">
                <div className="navbar navbar-default">
                    <a className="navbar-brand brand" href="/">radiole</a>
                    <button type="button" className="navbar-toggle">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
            </div>
        )
    }
}