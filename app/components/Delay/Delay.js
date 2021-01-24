import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import Swal from 'sweetalert2';
import { socket } from '../../services';
import './Delay.scss';

// eslint-disable-next-line
const Delay = ({ intervals = [] }) => {
    const setIntervel = (interval) => {
        socket.emit('changeInterval', interval);
        Swal.fire('Success!', `Interval is set to ${interval / 1000} seconds`, 'success');
    };
    return (
        <div className="selectInterval">
            <FormGroup>
                <Label for="Select">Select Interval</Label>
                <Input defaultValue={5000} type="select" name="select" id="Select" onChange={(e) => setIntervel(e.target.value)}>
                    {intervals.map(value => <option key={value} value={value}>{value / 1000} sec</option>)}
                </Input>
            </FormGroup>
        </div>
    );
};
export default Delay;
