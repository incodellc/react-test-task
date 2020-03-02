import React from "react";

export const CompareRes = ({ compItem, preItem }) =>
  compItem > preItem ? (
    <span className="arrow arrow-up">&#8593;</span>
  ) : compItem === preItem ? (
    ""
  ) : (
    <span className="arrow arrow-down">&#8595;</span>
  );
