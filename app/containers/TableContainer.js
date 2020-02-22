import React from 'react';
import PropTypes from 'prop-types';

import Table from '../components/DataTable';

const TableContainer = (props)=> {
    return(<Table tickerDataArr = {props.dataObjArr}/>);
};

TableContainer.propTypes = {
    dataObjArr: PropTypes.array,
};

export default TableContainer;
