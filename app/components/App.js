import '../styles/application.scss';

import React, { PureComponent } from 'react';
import TickerTable from './ticker';

// The below line is here as an example of getting prices

export default class App extends PureComponent {
    render() {
        return (
      <div className="stock-ticker">
        <h1>Stock Blotter</h1>
        <TickerTable />
      </div>
    );
    }
}
