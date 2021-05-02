import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {v4 as uuidv4} from 'uuid';
import React from 'react';
import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    red: {
        color: 'red',
    },
    green: {
        color: 'limegreen',
    },
});

const StocksTableRow = () => {
    const classes = useStyles();
    const stocks = useSelector(state => state.stockTickers.stocks);

    return Object.keys(stocks).map((key) => {
        const cells = Object.keys(stocks[key]).filter(k => k !== 'color').map((value, index) => {
            const colorClass = stocks[key].color === 'green' ? classes.green : classes.red;
            return value === 'price' ?
                <TableCell className={colorClass} key={index}>{stocks[key][value]}</TableCell> :
                <TableCell key={index}>{stocks[key][value]}</TableCell>;
        });
        return (
            <TableRow key={uuidv4()}>
                {cells}
            </TableRow>);
    });
};

export default StocksTableRow;
