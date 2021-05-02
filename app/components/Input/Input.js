import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ReceiptIcon from '@material-ui/icons/Receipt';
import {useDispatch} from 'react-redux';
import {updateTicker} from '../../redux/features/stocks/stockTicker';
import {connect} from '../../services';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const InputWithIcon = () => {
    const classes = useStyles();
    const [ticker, setTicker] = useState('');

    const dispatch = useDispatch();
    const tickerData = (data) => dispatch(updateTicker(data));

    const handleChange = (event) => {
        setTicker(event.target.value);
    };

    const keyPress = (event) => {
        if (event.keyCode === 13) {
            connect(ticker.replace(/[^a-z]/gi, '').toUpperCase(), tickerData);
        }
    };

    return (
        <div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <ReceiptIcon/>
                    </Grid>
                    <Grid item>
                        <TextField onChange={handleChange} onKeyDown={keyPress}
                            id="input-with-icon-grid"
                            label="Enter a ticker name"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default InputWithIcon;
