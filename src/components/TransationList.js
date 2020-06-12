import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../App.css';
export const TransationList = () => {
  const { transcation } = useContext(GlobalContext);

  return (
    <div>
      <h5>
        History{' '}
        <span>
          <i className="material-icons ">arrow_downward</i>
        </span>
      </h5>
      <ul className=" tabs-fixed-width tab-demo z-depth-1">
        {transcation.map((transaction, i) => (
          <li
            key={i}
            className={transaction.amount < 0 ? 'minAmount' : 'plusAmount'}
          >
            <h6>{transaction.text}</h6>
            <h6>{Math.abs(transaction.amount)}</h6>
            <span>
              <i className="material-icons ">delete</i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
