import '../styles/application.scss';
import { connectDataProvider } from '../services';
import React from 'react';

import ActualPrice from './ActualPrice/ActualPrice';
import Details from './Details/Details';
import SelectIntervalDropdown from '../components/SelectIntervalDropdown/SelectIntervalDropdown';

const App = () => {
    const intervals = [2, 5, 8, 10];
    React.useEffect(() => {
        connectDataProvider('AAPL');
    }, []);
    return (
        <div className="app__container" data-testid="app">
            <div className="app">
                <ActualPrice />
                <SelectIntervalDropdown intervals={intervals}/>
                <Details/>
            </div>
        </div>
    );
};

export default App;
