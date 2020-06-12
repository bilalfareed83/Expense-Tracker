import React from 'react';
import CountUp from 'react-countup';

export const Balance = () => {
  return (
    <div>
      <h6>Your Balnce</h6>
      <h4>
        $<CountUp end={100} duration={2.0} separator="," />
      </h4>
    </div>
  );
};
