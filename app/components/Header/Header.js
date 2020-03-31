import React from 'react';

import SetIntervalForm from '../SetIntevalForm/SetIntevalForm';

class Header extends React.Component {
    render() {
        return (
            <div className="row">
                <h1 className="col-lg-4 text-center">Stock Blotter</h1>
                <SetIntervalForm/>
            </div>
        );
    }
}

export default Header;

