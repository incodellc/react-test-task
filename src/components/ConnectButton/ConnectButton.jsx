import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { setConnect } from "../../store/actions";
import ticker from "../../services/ticker";


const ConnectButton = props => {
    const dispatch = useDispatch();

    const nasdaqCurrent = useSelector(state => state.nasdaqCurrent);
    const stateConnect = useSelector(state => state.connect);

    const connect = key => {
        ticker.socket.disconnect();
        dispatch(setConnect(true));
        
        ticker.getData(nasdaqCurrent.key)
    };

    const disconnect = () => {
        ticker.socket.disconnect();
        dispatch(setConnect(false));
    };

    return (
        <div className="connect-button">
            {stateConnect ? (
                        <Button
                            data-testid="disconnect-button"
                            className="ml-3"
                            variant="danger"
                            onClick={() => {
                                disconnect();
                            }}
                        >
                            Disconnect
                        </Button>
                    ) : (
                        <Button
                            data-testid="connect-button"
                            className="ml-3"
                            variant="success"
                            onClick={() => {
                                connect();
                            }}
                        >
                            Connect
                        </Button>
                    )}
        </div>
    );
};

export default ConnectButton;
