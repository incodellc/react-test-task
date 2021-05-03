import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';

const ChangeDisplay = ({ preValue, actualValue }) => {
    const [difference, setDifference] = useState(0);
    const calculateDifference = (firstValue, secondValue) => {
        const result = parseFloat(secondValue) - parseFloat(firstValue);
        setDifference(result.toFixed(2));
    };

    useEffect(() => {
        calculateDifference(preValue, actualValue);
    }, [preValue]);
    return (
        <div className="show-change">
            {actualValue > preValue ?
                <div className="show-change__positive">
                    <i className="fas fa-chevron-up"></i>
                    <p>{difference}</p>
                </div> :
                <div className="show-change__negative">
                    <i className="fas fa-chevron-down"></i>
                    <p>{difference}</p>
                </div>
            }
        </div>
    );
};

ChangeDisplay.propTypes = {
    preValue: string,
    actualValue: string
};

export default ChangeDisplay;
