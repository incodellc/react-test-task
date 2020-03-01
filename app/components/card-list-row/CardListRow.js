import React from 'react';

const CardListRow = props => {
    // eslint-disable-next-line react/prop-types
    const { rowName, rowData, priceChange } = props;
    let priceChangeIcon = null;

    if (priceChange > 0) {
        priceChangeIcon = (
            <i className="fa fa-chevron-circle-up mx-1 text-danger"></i>
        );
    } else if (priceChange < 0) {
        priceChangeIcon = (
            <i className="fa fa-chevron-circle-down mx-1 text-success"></i>
        );
    }

    return (
        <li className="list-group-item text-capitalize d-flex justify-content-between">
            <span>{rowName}:</span>
            <span>
                {rowData}
                {priceChangeIcon}
            </span>
        </li>
    );
};

export default CardListRow;
