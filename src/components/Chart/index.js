import Chart from "./Chart";
import { connect } from "react-redux";

export default connect(state => {
    return {
        data: state.data,
        history: state.history
    };
})(Chart);
