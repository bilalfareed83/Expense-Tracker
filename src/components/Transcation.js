import React, { useContext } from "react";
import CountUp from "react-countup";
import { GlobalContext } from "../context/GlobalState";

const Transcation = ({ transcation }) => {
  const { deleteTranscation } = useContext(GlobalContext);

  const sign = transcation.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={transcation.amount < 0 ? "minAmount" : "plusAmount"}>
        <h6>{transcation.text}</h6>
        <h6>
          ${sign}
          <CountUp
            end={Math.abs(transcation.amount)}
            duration={2.0}
            separator=","
          />
        </h6>
        <span onClick={() => deleteTranscation(transcation.id)}>
          <i className="material-icons ">delete</i>
        </span>
      </li>
    </>
  );
};

export default Transcation;
