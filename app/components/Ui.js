import PropTypes from 'prop-types';
import '../styles/application.scss';
import React  from 'react';

class Ui extends React.Component {

    state = {
        keys: [],
        values: [],
    }
    componentDidMount() {
        this.setupState(this.props.data);
        setInterval(() => {
            this.setupState(this.props.data);
        }, this.props.time);
    }
    setupState(data) {
        const array = [];
        const array1 = [];
        Object.getOwnPropertyNames(data).map((i) => {
            array.push(i);
            this.setState({
                keys: array
            });
        });
        Object.keys(data).map((i) => {
            array1.push(data[i]);
            this.setState({
                values: array1
            });
        });
    }

    renderUi(state) {
        return(
        state.map((k, i) =>
            <td key={i}>
              {k}
            </td>
          ));
    }
    render() {
        const { values, keys } = this.state;
        return (
            <table className="ui">
                <tbody>
                <tr>{this.renderUi(keys)}</tr>
                <tr>{this.renderUi(values)}</tr>
                </tbody>
            </table>

        );
    }
}


export default Ui;


Ui.propTypes = {
    data: PropTypes.object,
    time: PropTypes.number,
};

