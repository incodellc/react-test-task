import React from 'react';
import PropTypes from 'prop-types';
import './BlockData.scss';

const BlockData = ({title, children}) => (
    <li className="block-for-data">
        <h4 className="block-for-data__title">{title}</h4>
        <div className="block-for-data__value-wrp">
            <div className="block-for-data__value">{children}</div>
        </div>
    </li>
);

BlockData.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default BlockData;
