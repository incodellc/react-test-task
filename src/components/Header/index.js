import Header from "./Header";
import { connect } from "react-redux";

export default connect(state => {
    return {
        nasdaqList: state.nasdaqList,
        nasdaqCurrent: state.nasdaqCurrent,
        connect: state.connect
    };
})(Header);;