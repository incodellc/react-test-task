import '../../styles/application.scss';
import React, {PureComponent} from 'react';
import TickersContainer from '../../containers/TickersContainer/TickersContainer';
import Header from '../Header/Header';

class App extends PureComponent {
    render() {
        return (
            <div className="stock-ticker">
                <div className="container">
                    <Header />
                    <TickersContainer />
                </div>
            </div>
        );
    }
}

export default App;
