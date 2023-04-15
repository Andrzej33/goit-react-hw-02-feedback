import React from 'react';

const Statistics = ({ value }) => {
  return (
    <ul>
      <li>
        <span>Good:</span>
        <span className="quantity">{value}</span>
      </li>
      <li>
        <span>Neutral:</span>
        <span className="quantity">0</span>
      </li>
      <li>
        <span>Bad:</span>
        <span className="quantity">0</span>
      </li>
    </ul>
  );
};

export default Statistics;
