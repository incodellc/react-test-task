import React, {useCallback} from 'react';
import { useForm } from 'react-hook-form';
import {useDispatch} from 'react-redux';
import { Button } from 'semantic-ui-react';
import { saveCustomFetchInterval } from '../../actions/stockTickerActions';
import './CustomFetchIntervalForm.scss';

const CustomFetchIntervalForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = useCallback(data => {
        dispatch(saveCustomFetchInterval(data.fetchInterval));
    }, []);

    return (
        <form className="CustomFetchIntervalForm" onSubmit={handleSubmit(onSubmit)}>
            <label className="CustomFetchIntervalForm__label">Custom updating time, sec</label>
            <input
                className="CustomFetchIntervalForm__input"
                type="number"
                name="fetchInterval"
                placeholder="Enter time in seconds"
                ref={register({min: 0, max: 1000})}
                height="20px"
                autoComplete="off"
                defaultValue={'5'}
            />
            <div className="CustomFetchIntervalForm__footer">
                {errors.fetchInterval && (
                    <span className="CustomFetchIntervalForm__error">Value must be more then 0 less then 1000</span>
                )}
                <Button className="CustomFetchIntervalForm__button" color="teal">Submit</Button>
            </div>
        </form>
    );
};

export default CustomFetchIntervalForm;
