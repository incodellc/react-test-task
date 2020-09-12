import React from 'react';

// eslint-disable-next-line react/prop-types
const Arrow = ({current, prev})=> {
    const getStatusStyle = () => current > prev ? 'arrow up' :  'arrow down';

    return (<i className={getStatusStyle()}></i>);
};

export default Arrow;
