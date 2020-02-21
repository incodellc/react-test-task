import React from 'react';
import ProgressChangeValue from '../ProgressChangeValue/ProgressChangeValue';
import BlockData from './BlockData/BlockData';
import PropTypes from 'prop-types';
import './ListBlocksData.scss';

export const getTimeHMS = (date) => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

// eslint-disable-next-line react/prop-types
const ListBlocksData = ({objWithData}) => {
    const keysObj = Object.keys(objWithData);

    // eslint-disable-next-line react/no-multi-comp
    const getListBlocksForData = () => keysObj.map((key, index) => {
        let title = key.toUpperCase().replace(/_/g, ' ');
        let value = objWithData[key];

        if (key === 'last_trade_time') {
            const updateDate = new Date(value);
            value = getTimeHMS(updateDate);
        } else if (key === 'price') {
            value = <ProgressChangeValue price={value}/>;
        }
        return <BlockData key={index} title={title}>{value}</BlockData>;
    });

    if (keysObj.length) {
        return (
            <ul className="block-list">
                {getListBlocksForData()}
            </ul>
        );
    }
    return null;
};

BlockData.propTypes = {
    objWithData: PropTypes.object,
};

export default ListBlocksData;
