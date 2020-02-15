import React from 'react';
import '../style.css';


class Ticker extends React.Component {
    render() {
        return (
            <div className="">

                <div className="">{this.props.ticker.price}</div>

            </div>
        );
    }
}

export default Ticker;
