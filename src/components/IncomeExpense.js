import React from 'react';
import CountUp from 'react-countup';

export const IncomeExpense = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="row">
        <div className=" s12 m5">
          <div className="card-panel teal #f5f5f5 grey lighten-4">
            <h5>Income</h5>
            <h6 className="#009688 teal-text">
              $<CountUp end={50} separator="," duration={2.0} />
            </h6>
          </div>
        </div>
      </div>
      <div className="s12 m5">
        <div className="card-panel #f5f5f5 grey lighten-4">
          <h5>Expense</h5>
          <h6 className="#f44336 red-text ">
            $
            <CountUp end={50} separator="," duration={2.0} />
          </h6>
        </div>
      </div>
    </div>
  );
};
