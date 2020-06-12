import React from 'react';

export const IncomeExpense = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="row">
        <div className=" s12 m5">
          <div className="card-panel teal #f5f5f5 grey lighten-4">
            <h5>Income</h5>
            <h6 className="#009688 teal-text">$0.00</h6>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="s12 m5">
          <div className="card-panel #f5f5f5 grey lighten-4">
            <h5>Expense</h5>
            <h6 className="#f44336 red-text ">$0.00</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
