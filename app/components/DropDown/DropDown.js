import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useDispatch} from 'react-redux';
import {setInterval} from '../../redux/features/stocks/stockInterval';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    label: {
        marginBottom: 10,
    }
}));

const DropDown = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setInterval(event.target.value * 1000));
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} id="select-label">Interval time</InputLabel>
                <Select
                    labelId="select-label"
                    id="simple-select"
                    onChange={handleChange}
                    defaultValue={5}
                >
                    <MenuItem value={1}>1 second</MenuItem>
                    <MenuItem value={5}>5 seconds</MenuItem>
                    <MenuItem value={10}>10 seconds</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default DropDown;
