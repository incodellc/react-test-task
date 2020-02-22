import React from 'react';
import PropTypes from 'prop-types';

import Table from '../components/DataTable';

const TableContainer = (props)=> {
    return(<Table tickerDataArr = {props.dataObj}/>);
};

TableContainer.propTypes = {
    dataObj: PropTypes.array,
};

export default TableContainer;
