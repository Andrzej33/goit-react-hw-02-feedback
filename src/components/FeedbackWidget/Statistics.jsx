// import React from 'react';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>
        <span>Good:</span>
        <span className="quantity">{good}</span>
      </li>
      <li>
        <span>Neutral:</span>
        <span className="quantity">{neutral}</span>
      </li>
      <li>
        <span>Bad:</span>
        <span className="quantity">{bad}</span>
      </li>
      <li>
        <span>Total:</span>
        <span className="quantity">{total}</span>
      </li>
      <li>
        <span>Positive Feedback:</span>
        <span className="quantity">{positivePercentage}%</span>
      </li>
    </ul>
  );
};
