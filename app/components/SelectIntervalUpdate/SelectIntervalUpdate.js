import React from 'react';
import './SelectIntervalUpdate.scss';
import {changeInterval} from '../../services';

export const intervalList = [2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000];

class SelectIntervalUpdate extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: '5000'
        };
    }

    handlerChange = (e) => {
        const selectedValue = e.target.value;
        changeInterval(selectedValue);
        this.setState({selectedValue});
    };

    render() {
        return (
            <div className="select-interval">
                <label htmlFor="select-interval" className="select-interval__label">Select update interval:</label>
                <select name=""
                        id="select-interval"
                        onChange={this.handlerChange}
                        className="select-interval__select"
                        value={this.state.selectedValue}
                >
                    {
                        intervalList.map((value, index) => <option key={index} value={value}>{value}</option>)
                    }
                </select>
            </div>
        );
    }
}

export default SelectIntervalUpdate;
