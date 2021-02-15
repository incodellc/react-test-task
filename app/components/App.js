import React from 'react';
import Card from './Card/';
import Menu from './Menu/';
import '../styles/application.scss';

import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { mStP, mDtP } from './setts/actions';
// The below line is here as an example of getting prices

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.init();
    }
    componentWillUnmount() {
        this.props.disconnectFromServer();
    }

    render() {
        const { stockTicker } = this.props;
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                <div className="container">
                    <Menu />
                    <Card {...stockTicker} />
                </div>
            </div>
        );
    }
}

export default connect(mStP, mDtP)(App);
