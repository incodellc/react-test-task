import React from 'react';

import connect from 'react-redux/lib/components/connect';
import './PricePanel.scss';
import BlockData from '../ListBlocksData/BlockData/BlockData';
import loader from './loader.svg';
import PropTypes from 'prop-types';
import ListBlocksData from '../ListBlocksData/ListBlocksData';

// eslint-disable-next-line react/prop-types,react/no-multi-comp
export const PricePanel = ({stockTicker}) => (
    <div className="price-panel">
        {stockTicker.price
            ? <ListBlocksData objWithData={stockTicker}/>
            : <img src={loader} alt="loading" className="price-panel__loader"/>
        }
    </div>
);

BlockData.propTypes = {
    stockTicker: PropTypes.object,
};

const mapStateToProps = (state) => ({stockTicker: state});
export default connect(mapStateToProps)(PricePanel);
