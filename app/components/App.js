import '../styles/application.scss';
import {connect as ioConnect} from '../services';
import { connect } from 'react-redux';
import Card from './Card';
import React, {Component} from 'react';
import { newPrice } from '../reducers/actions';

// The below line is here as an example of getting prices

class App extends Component {


    componentDidMount() {
        const getData = (data) => {
            // eslint-disable-next-line react/prop-types
            const {addPrice} = this.props;

            addPrice(data);
        };

        ioConnect('AAPL', getData);
    }


    render() {
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                <Card/>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addPrice: newPrice
};

export default connect(null, mapDispatchToProps)(App);
