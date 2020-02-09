import React from "react";
import { Container } from "react-bootstrap";

import AppDropdown from "../AppDropdown";
import ConnectButton from "../ConnectButton";

const Header = props => {
    return (
        <div id="header-component" data-testid="header">
            <Container>
                <h1>Stock Blotter</h1>
                <div className="d-flex mt-2 mb-2 align-items-center">
                    <AppDropdown data-testid="app-dropdown"/>
                    <ConnectButton />
                </div>
            </Container>
        </div>
    );
};

export default Header;
