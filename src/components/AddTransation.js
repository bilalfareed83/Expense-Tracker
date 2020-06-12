import React from 'react';
import '../App.css';

export const AddTransation = () => {
  return (
    <>
      <h6>Add new transaction</h6>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6  input-field  ">
              <i className="material-icons prefix ">arrow_forward</i>
              <input id="icon_prefix" type="text" className="validate  " />
              <label htmlFor="icon_prefix">Add text here</label>
            </div>
            <div className="input-field col s6 ">
              <i className="material-icons prefix ">attach_money</i>
              <input id="icon_telephone" type="number" className="validate" />
              <label htmlFor="icon_telephone">Enter amount</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light #01579b light-blue darken-4"
            type="submit"
            name="action"
          >
            Add Transcation
            <i className="material-icons right">add</i>
          </button>
        </form>
      </div>
    </>
  );
};
