import '../styles/application.scss';
import React, { PureComponent } from 'react';

import Ticker from './Ticker';

class App extends PureComponent {
  state = {
    stockSymbol: 'AAPL',
  };

  render() {
    return (
      <div className="stock-ticker">
        <h1>Stock Blotter</h1>
        <Ticker stockSymbol={this.state.stockSymbol} />
      </div>
    );
  }
}

export default App;
