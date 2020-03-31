import '../../styles/application.scss';
import React, {PureComponent} from 'react';
import TickerList from '../TickerList/TickerList';
import Header from '../Header/Header';

class App extends PureComponent {
    render() {
        return (
            <div className="stock-ticker">
                <div className="container">
                    <Header />
                    <TickerList />
                </div>
            </div>
        );
    }
}

export default App;
