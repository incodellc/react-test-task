import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TickerList = ({ children }) => {
    return (
        <List 
            celled 
            selection 
            verticalAlign='middle'
        >
            {children}
        </List>
    );
};

TickerList.propTypes = {
    children: PropTypes.node.isRequired
};

export default TickerList;