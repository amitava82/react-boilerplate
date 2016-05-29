/**
 * Created by amitava on 30/01/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {SITE_DESC} from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Toastr from './utils/toastr';


@connect(state => state)
export default class App extends React.Component {

    render(){
        return (
            <main className="full-height">
                <Helmet title="Spotcher" meta={[
                    {
                        name: 'description',
                        content: SITE_DESC
                    }
                ]} />
                <Header />
                <div id="main" className="full-height">
                    {this.props.children}
                </div>
                <Footer />
                <Toastr />
            </main>
        );
    }
}
