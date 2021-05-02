import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputWithIcon from '../Input/Input';
import DropDown from '../DropDown/DropDown';
import StocksTableRow from './StocksTableRow';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    table: {
        width: 500,
    },
    inputs: {
        display: 'flex',
        justifyContent: 'center',
    },
});


const stockKeys = [
    'Ticker', 'Exchange', 'Price', 'Change', 'Change Percent', 'Last Trade Time', 'Dividend', 'Yield'
];

export default function StocksTable() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.inputs}>
                <InputWithIcon/>
                <DropDown/>
            </div>
            <TableContainer className={classes.root}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {stockKeys.map((key, index) =>
                                <TableCell key={index}>{key}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StocksTableRow/>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
