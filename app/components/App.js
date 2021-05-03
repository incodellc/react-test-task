import '../styles/application.scss';
import React from 'react';

import StockCart from './StockCart';
import StockConfiguration from './StockConfiguration';

function App() {
    return (
        <div className="stock-ticker">
            <h1 data-testid="stock-header">Price Serive</h1>
            <StockConfiguration />
            <StockCart />
        </div>
    );
}

export default App;
