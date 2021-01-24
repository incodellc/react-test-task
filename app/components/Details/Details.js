/* eslint-disable no-unused-vars */
import { map } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { stockTickerSelector } from './../../selectors/tickerServiceSelector';
import classnames from 'classnames';
import './Details.scss';

const Details = () => {
    const stockTicker = useSelector(stockTickerSelector);
    const [toogle, setToogle] = React.useState(false);
    const showDetails = () => map(stockTicker, (value, key) => <p key={key}><b>{key}:</b> <i>{`${value}`}</i></p>);
    return (
        <div className="delais_container">

            <Button className="toogle-detailt" color="secondary" onClick={() => setToogle(!toogle)}>
                Details {!toogle ? 'Open' : 'Close'}
                <i className={classnames('material-icons', { up: toogle, down: !toogle })}>
                    {toogle ? 'arrow_drop_up' : 'arrow_drop_down'}
                </i>
            </Button>
            <div className={classnames('list', { open: toogle })}>
                {showDetails()}
            </div>
        </div>);
};

export default Details;
