import React from 'react';

const Statistics = ({ value, valueSecond, valueThird }) => {
  return (
    <ul>
      <li>
        <span>Good:</span>
        <span className="quantity">{value}</span>
      </li>
      <li>
        <span>Neutral:</span>
        <span className="quantity">{valueSecond}</span>
      </li>
      <li>
        <span>Bad:</span>
        <span className="quantity">{valueThird}</span>
      </li>
      <li>
        <span>Total:</span>
        <span className="quantity">0</span>
      </li>
      <li>
        <span>Positive Feedback:</span>
        <span className="quantity">%</span>
      </li>
    </ul>
  );
};

export default Statistics;
