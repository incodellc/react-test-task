import React from 'react';
import PropTypes from 'prop-types';
import './BlockForData.scss';

const BlockForData = ({title, children}) => (
    <div className="block-for-data">
        <h4 className="block-for-data__title">{title}</h4>
        <div className="block-for-data__value-wrp">
            <div className="block-for-data__value">{children}</div>
        </div>
    </div>
);

BlockForData.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default BlockForData;
