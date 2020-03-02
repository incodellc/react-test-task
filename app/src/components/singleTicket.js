import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { connect } from "../services/tickerService";
import moment from "moment";
import usePrevious from "../store/prevTicker";
import { CompareRes } from "./compares";
import { tickerAction } from "../actions/tickerActions";

export const SingleTicker = () => {
  const dispatch = useDispatch();
  const theTicker = useSelector(state => state.ticker, shallowEqual);
  const firstStart = ticker => {
    dispatch(tickerAction(ticker));
  };
  useEffect(() => {
    connect("AAPL", firstStart);
  }, []);

  const prevPrice = usePrevious(theTicker.price);
  const prevChange = usePrevious(theTicker.change);
  const prevPercent = usePrevious(theTicker.change_percent);

  return (
    <div className={"container"}>
      <div className="row">
        <span className="name">Ticker:</span>
        <span className="value">{theTicker.ticker}</span>
      </div>
      <div className="row">
        <span className="name">Exchange:</span>
        <span className="value">{theTicker.exchange}</span>
      </div>
      <div className="row">
        <span className="name">Price:</span>
        <span className="value">{theTicker.price}</span>
        <CompareRes compItem={theTicker.price} preItem={prevPrice} />
      </div>
      <div className="row">
        <span className="name">Change:</span>
        <span className="value">{theTicker.change}</span>
        <CompareRes compItem={theTicker.change} preItem={prevChange} />
      </div>
      <div className="row">
        <span className="name">Change percent:</span>
        <span className="value">{theTicker.change_percent}</span>
        <CompareRes compItem={theTicker.change_percent} preItem={prevPercent} />
      </div>
      <div className="row">
        <span className="name">Last trade time:</span>
        <span className="value">
          {moment(theTicker.last_trade_time).format("MMMM Do YYYY, h:mm:ss a")}
        </span>
      </div>
      <div className="row">
        <span className="name">Dividend:</span>
        <span className="value">{theTicker.dividend}</span>
      </div>
      <div className="row">
        <span className="name">Yield:</span>
        <span className="value">{theTicker.yield}</span>
      </div>
    </div>
  );
};
