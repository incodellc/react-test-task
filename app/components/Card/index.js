import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Card = (props) => {
    const { data, errorChecker } = props;
    if (errorChecker === true) {
        return <p className="warning">Server connection error</p>;
    }
    return (
        <div className="card">
            <table className="card__table">
                <tbody>
                    <tr>
                        <th>Ticker Name</th>
                        <th>Exchange</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Change Percent</th>
                        <th>Dividend</th>
                        <th>Time</th>
                        <th>Income</th>
                    </tr>
                    {data.map((item, ind) => {
                        const localTime = new Date(
                            item.lastTradeTime
                        ).toLocaleString();
                        const changeClass = item.change > 0 ? 'green' : 'red';
                        const percent = (
                            parseFloat(item.changePercent, 10) * 100
                        ).toFixed();

                        return (
                            <tr key={ind * Math.random() + 1}>
                                <td>{item.ticker}</td>
                                <td>{item.exchange}</td>
                                <td>{item.price}</td>
                                <td className={changeClass}>{item.change}</td>
                                <td>{`${percent}%`}</td>
                                <td>{item.dividend}</td>
                                <td>{localTime}</td>
                                <td>{item._yield}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Card;
Card.propTypes = {
    data: PropTypes.array.isRequired,
    errorChecker: PropTypes.bool.isRequired,
};
