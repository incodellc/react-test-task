import '../styles/application.scss';

import TableContainer from '../containers/TableContainer';

import React, {PureComponent} from 'react';

// The below line is here as an example of getting prices

class App extends PureComponent {
    render() {
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                <TableContainer dataObj = {this.props.state}/>
            </div>
        );
    }
}

export default App;
