import '../../styles/application.scss';
import React from 'react';
import TickersContainer from '../../containers/TickersContainer/TickersContainer';
import Header from '../Header/Header';

const App = () => {
    return (
        <div className="stock-ticker">
            <div className="container">
                <Header />
                <TickersContainer />
            </div>
        </div>
    );
};

export default App;
