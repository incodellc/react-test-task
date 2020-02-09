import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { setNasdaqCurrent, setConnect, resetHistory } from "../../store/actions";
import ticker from "../../services/ticker";

const AppDropdown = props => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(props.show)
    const nasdaqCurrent = useSelector(state => state.nasdaqCurrent);
    const nasdaqList = useSelector(state => state.nasdaqList);

    const select = payload => {
        dispatch(setNasdaqCurrent(payload));
        dispatch(setConnect(true));
        dispatch(resetHistory());

        ticker.getData(payload.key)
    };

    const itemsList = () => {
        return nasdaqList ? nasdaqList.map(item => {
            return (
                <Dropdown.Item
                    key={item.key}
                    active={item.key === nasdaqCurrent.key ? true : false}
                    onClick={() => {
                        select(item);
                    }}
                >
                    {item.name + "; " + item.key}
                </Dropdown.Item>
            );
        }) : false
    } 
    
    return (
        <>
            <div>Select:</div>
            <div className="app-dropdown">
                <DropdownButton
                    show={show}
                    onToggle={() => {
                        setShow(!show)
                    }}
                    data-testid="dropdown"
                    className="ml-3"
                    id="dropdown-basic-button"
                    title={nasdaqCurrent.key || "loading..."}
                >
                    {itemsList()}
                </DropdownButton>
            </div>
        </>
    );
};

export default AppDropdown;
